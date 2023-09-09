import { Button, Input, Spinner, useInput, useToasts, Radio, Card } from '@geist-ui/core'
import { FC, useCallback, useState, useEffect } from 'react'
import useSWR from 'swr'
import { getProviderConfigs, ProviderConfigs, ProviderType, saveProviderConfigs } from '@/config'
import { Select as Aselect } from 'antd'
import cn from 'classnames';
const { Option } = Aselect
import { isSafari, availableModels } from '@/utils/utils'

interface ConfigProps {
  config: ProviderConfigs
  models: string[]
}

const ConfigPanel: FC<ConfigProps> = ({ config, models }) => {
  const [tab, setTab] = useState<ProviderType>(isSafari ? ProviderType.GPT3 : config.provider)
  const { bindings: apiKeyBindings } = useInput(config.configs[ProviderType.GPT3]?.apiKey ?? '')
  const { bindings: apiHostBindings } = useInput(config.configs[ProviderType.GPT3]?.apiHost ?? '')
  const [model, setModel] = useState(config.configs[ProviderType.GPT3]?.model ?? models[0])
  const { setToast } = useToasts()

  const save = useCallback(async () => {
    if (tab === ProviderType.GPT3) {
      if (!apiKeyBindings.value) {
        alert('Please enter your OpenAI API key')
        return
      }

      if (!model || !models.includes(model)) {
        alert('Please select a valid model')
        return
      }
    }

    let apiHost = apiHostBindings.value || ''
    apiHost = apiHost.replace(/^http(s)?:\/\//, '')

    await saveProviderConfigs(tab, {
      [ProviderType.GPT3]: {
        model,
        apiKey: apiKeyBindings.value,
        apiHost: apiHost,
      },
    })
    setToast({ text: 'Changes saved', type: 'success' })
  }, [apiHostBindings.value, apiKeyBindings.value, model, models, setToast, tab])

  useEffect(() => {
    console.log('config', config)
    console.log('models', models)
  }, [config, models])

  const isMobile = window.innerWidth < 768; // 假设小于768px为移动端
  const flexClass = isMobile ? 'glarity--flex-col' : 'glarity--flex-row';

  return (
    <>
      <Card className="glarity--card">
        <div className="glarity--flex glarity--flex-col glarity--gap-3">
          <Radio.Group value={tab} onChange={(v) => setTab(v as ProviderType)}>
            { !isSafari && (
              <>
                <Radio value={ProviderType.ChatGPT}>
                  ChatGPT webapp
                  <Radio.Desc>
                    {' '}
                    The API that powers ChatGPT webapp, free, but sometimes unstable
                  </Radio.Desc>
                </Radio>
              </>
            ) }

            <Radio value={ProviderType.GPT3}>
              OpenAI API
              <Radio.Desc>
                <div className="glarity--flex glarity--flex-col glarity--gap-2">
                  <span>
                    OpenAI official API, more stable,{' '}
                    <span className="glarity--font-semibold">charge by usage</span>
                  </span>
                  <div className={cn("glarity--flex", flexClass, "glarity--gap-2", "glarity--geist--select")}>
                    <Input
                      htmlType="text"
                      placeholder="api.openai.com"
                      label="API Host"
                      scale={2 / 3}
                      clearable
                      {...apiHostBindings}
                    />
                    <Aselect
                      defaultValue={model}
                      onChange={(v) => setModel(v as string)}
                      placeholder="model"
                      optionLabelProp="label"
                      style={{ width: '170px' }}
                    >
                      {models.map((m) => (
                        <Option key={m} value={m} label={m}>
                          {m}
                        </Option>
                      ))}
                    </Aselect>
                    <Input
                      htmlType="password"
                      placeholder="sk-********"
                      label="API key"
                      scale={2 / 3}
                      clearable
                      {...apiKeyBindings}
                    />
                  </div>
                  <span className="glarity--italic glarity--text-xs">
                    You can find or create your API key{' '}
                    <a
                      href="https://platform.openai.com/account/api-keys"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                  </span>
                </div>
              </Radio.Desc>
            </Radio>
          </Radio.Group>
          <Card.Footer>
            <Button scale={2 / 3} style={{ width: 20 }} type="success" onClick={save}>
              Save
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </>
  )
}

function ProviderSelect() {
  const query = useSWR('provider-configs', async () => {
    const [config] = await Promise.all([getProviderConfigs()])

    return { config }
  })

  const models = availableModels.map(model => model.name)

  if (query.isLoading) {
    return <Spinner />
  }
  return <ConfigPanel config={query.data!.config} models={models} />
}

export default ProviderSelect
