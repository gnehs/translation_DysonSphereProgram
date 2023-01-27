# 戴森球計畫 - 繁體中文翻譯檔
## 關於
戴森球計畫繁體中文翻譯檔，使用了 [繁化姬](https://zhconvert.org/) 的 API 自簡體中文進行翻譯。
## 安裝方法
1. 開啟遊戲根目錄資料夾

1. 下載並解壓縮 [BepInEx](https://github.com/BepInEx/BepInEx/releases) 到遊戲根目錄
1. 下載 [翻譯模組](https://github.com/Muchaszewski/DSP_TranslationMod/releases) 並解壓縮
1. 將所有 DLL 複製到 `{遊戲根目錄}\BepInEx\plugins\DSPTranslationPlugin`
1. 下載 [翻譯檔](https://github.com/gnehs/translation_DysonSphereProgram/archive/refs/heads/main.zip) 並解壓縮
1. 將 `res` 資料夾中的所有檔案複製到 `{遊戲根目錄}\DSPGAME_Data\Translation\zh-TW\` 中（若資料夾不存在請自行建立資料夾）
1. 在遊戲中選擇 `繁體中文（台灣）` 作為語言

> 參考連結：https://dsp.thunderstore.io/package/Muchaszewski/DSPTranslationPlugin/

> 你也可以參考上述連結自遊戲中取得 `translation_DysonSphereProgram.json` 檔案並透過 `node index.mjs` 自動翻譯。
## 翻譯有誤？
- 請修改 `index.mjs` 中相關程式碼，並發送 PR，勿直接修改 `translation_DysonSphereProgram.json` 檔案。