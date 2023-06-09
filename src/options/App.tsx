import {
  CssBaseline,
  GeistProvider,
  Radio,
  Select,
  Text,
  Toggle,
  useToasts,
  Divider,
} from '@geist-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'
import '@/assets/styles/base.scss'
import {
  getUserConfig,
  Language,
  Theme,
  TriggerMode,
  TRIGGER_MODE_TEXT,
  updateUserConfig,
  DEFAULT_PAGE_SUMMARY_BLACKLIST,
} from '@/config'
import { PageSummaryProps } from './components/PageSummary'
import ProviderSelect from './ProviderSelect'
import { isIOS } from '@/utils/utils'
import Header from './components/Header'
import { detectSystemColorScheme } from '@/utils/utils'

import './styles.scss'

function OptionsPage(
  props: {
    theme: Theme
    onThemeChange: (theme: Theme) => void
  } & PageSummaryProps,
) {
  const {
    setPageSummaryEnable,
    pageSummaryEnable,
    pageSummaryWhitelist,
    pageSummaryBlacklist,
    setPageSummaryWhitelist,
    setPageSummaryBlacklist,
  } = props
  const [triggerMode, setTriggerMode] = useState<TriggerMode>(TriggerMode.Always)
  const [language, setLanguage] = useState<Language>(Language.Auto)
  const { setToast } = useToasts()
  // const [prompt, setPrompt] = useState<string>('')
  // const [promptSearch, setPromptSearch] = useState<string>('')
  // const [promptPage, setPromptPage] = useState<string>('')
  // const [promptComment, setPromptComment] = useState<string>('')

  const onTriggerModeChange = useCallback(
    (mode: TriggerMode) => {
      setTriggerMode(mode)
      updateUserConfig({ triggerMode: mode })
      setToast({ text: 'Changes saved', type: 'success' })
    },
    [setToast],
  )

  const onThemeChange = useCallback(
    (theme: Theme) => {
      updateUserConfig({ theme })
      props.onThemeChange(theme)
      setToast({ text: 'Changes saved', type: 'success' })
    },
    [props, setToast],
  )

  useEffect(() => {
    getUserConfig().then((config) => {
      setTriggerMode(config.triggerMode)
      setLanguage(config.language)
    })
  }, [])

  return (
    <div className="glarity--container glarity--mx-auto">
      <Header />

      <main className="glarity--w-[900px] glarity--mx-auto glarity--mt-14 glarity--options">
        <Text h2>Options</Text>

        {/* Trigger Mode */}
        {!isIOS && (
          <>
            <Text h3 className="glarity--mt-5">
              Trigger Mode
            </Text>
            <Radio.Group
              value={triggerMode}
              onChange={(val) => onTriggerModeChange(val as TriggerMode)}
            >
              {Object.entries(TRIGGER_MODE_TEXT).map(([value, texts]) => {
                return (
                  <Radio key={value} value={value}>
                    {texts.title}
                    <Radio.Description>{texts.desc}</Radio.Description>
                  </Radio>
                )
              })}
            </Radio.Group>
          </>
        )}

        {/* Theme */}
        <Text h3 className="glarity--mt-5">
          Theme
        </Text>
        <Radio.Group value={props.theme} onChange={(val) => onThemeChange(val as Theme)} useRow>
          {Object.entries(Theme).map(([k, v]) => {
            return (
              <Radio key={v} value={v}>
                {k}
              </Radio>
            )
          })}
        </Radio.Group>

        {/* AI Provider */}
        <Text h3 className="glarity--mt-5 glarity--mb-0">
          AI Provider
        </Text>
        <ProviderSelect />

        {/* <CustomizePrompt
          prompt={prompt}
          promptSearch={promptSearch}
          setPrompt={setPrompt}
          setPromptSearch={setPromptSearch}
          promptPage={promptPage}
          setPromptPage={setPromptPage}
          promptComment={promptComment}
          setPromptComment={setPromptComment}
        /> */}

        {/* <Divider /> */}
      </main>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(Theme.Auto)
  const [pageSummaryEnable, setPageSummaryEnable] = useState(true)
  const [pageSummaryWhitelist, setPageSummaryWhitelist] = useState<string>('')
  const [pageSummaryBlacklist, setPageSummaryBlacklist] = useState<string>('')

  const themeType = useMemo(() => {
    if (theme === Theme.Auto) {
      return detectSystemColorScheme()
    }
    return theme
  }, [theme])

  useEffect(() => {
    getUserConfig().then((config) => {
      setTheme(config.theme)
      setPageSummaryEnable(config.pageSummaryEnable)
      setPageSummaryWhitelist(config.pageSummaryWhitelist)
      setPageSummaryBlacklist(
        config.pageSummaryBlacklist ? config.pageSummaryBlacklist : DEFAULT_PAGE_SUMMARY_BLACKLIST,
      )
    })
  }, [])

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <OptionsPage
        theme={theme}
        onThemeChange={setTheme}
        setPageSummaryEnable={setPageSummaryEnable}
        pageSummaryEnable={pageSummaryEnable}
        pageSummaryWhitelist={pageSummaryWhitelist}
        pageSummaryBlacklist={pageSummaryBlacklist}
        setPageSummaryWhitelist={setPageSummaryWhitelist}
        setPageSummaryBlacklist={setPageSummaryBlacklist}
      />
    </GeistProvider>
  )
}

export default App
