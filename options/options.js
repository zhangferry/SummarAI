document.addEventListener("DOMContentLoaded", () => {
  var saveBtn = document.querySelector(".save-config")
  saveBtn.addEventListener("click", function (event) {
    console.log(`click save button`)
    // 获取radio选项
    var radiosSelectedValue = document.querySelector("input[name=trigger-way]:checked").value
    chrome.storage.sync.set({ "trigger-way": radiosSelectedValue })
    // 获取对应的host和api-key
    const host = document.querySelector(".host-input").value
    const apiKey = document.querySelector(".apikey-input").value
    // 保存这两个值
    if (host) {
      console.log(host)
      chrome.storage.sync.set({ "openai-host": host })
    }
    if (apiKey) {
      console.log(apiKey)
      chrome.storage.sync.set({ "api-key": apiKey })
    }
    // 关闭当前弹框
    window.close()
  })

  chrome.storage.sync.get(["trigger-way"], function (result) {
    const optionValue = result["trigger-way"]
    var radios = document.querySelectorAll("input[name=trigger-way]")
    if (optionValue) {
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === optionValue) {
          radios[i].checked = true
          break
        }
      }
    } else {
      // 默认值
      radios[0].checked = true
    }
  })

  var apiInput = document.querySelector(".apikey-input")
  chrome.storage.sync.get(["api-key"], function (result) {
    if (result["api-key"]) {
      apiInput.value = result["api-key"]
      console.log(apiInput.value)
    }
  })
  // 给host-input标签设置openai-host的值
  var hostInput = document.querySelector(".host-input")
  chrome.storage.sync.get(["openai-host"], function (result) {
    if (result["openai-host"]) {
      hostInput.value = result["openai-host"]
      console.log(hostInput.value)
    }
  })
})
