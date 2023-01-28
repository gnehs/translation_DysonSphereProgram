# 戴森球計畫 - 繁體中文翻譯檔
## 關於
戴森球計畫繁體中文翻譯檔，使用了 [繁化姬](https://zhconvert.org/) 的 API 自簡體中文進行翻譯。
## 安裝方法
1. 開啟遊戲根目錄資料夾
    > ![](https://user-images.githubusercontent.com/16719720/215250939-5217e04e-8eab-4f34-a259-99f86db0a104.jpeg)
    > 如果你使用 Steam 可依上圖指示開啟
1. 安裝 BepInEx
    - 下載 [BepInEx](https://github.com/BepInEx/BepInEx/releases)
    - 將解壓縮後所有檔案複製到遊戲根目錄
1. 安裝翻譯模組
    - 下載 [翻譯模組](https://github.com/Muchaszewski/DSP_TranslationMod/releases) 並解壓縮
    - 將壓縮檔內所有 DLL 複製到 `{遊戲根目錄}\BepInEx\plugins\DSPTranslationPlugin`（若資料夾不存在請自行建立資料夾）
1. 安裝繁體中文翻譯檔
    - 下載 [本翻譯檔](https://github.com/gnehs/translation_DysonSphereProgram/archive/refs/heads/main.zip) 並解壓縮
    - 將 `res` 資料夾中的所有檔案複製到 `{遊戲根目錄}\DSPGAME_Data\Translation\zh-TW\` 中（若資料夾不存在請自行建立資料夾）
1. 在遊戲中選擇 `繁體中文（台灣）` 作為語言

> 參考連結：https://dsp.thunderstore.io/package/Muchaszewski/DSPTranslationPlugin/

> 你也可以參考上述連結自遊戲中取得 `translation_DysonSphereProgram.json` 檔案並透過 `node index.mjs` 自動翻譯。
## 翻譯有誤？
- 請修改 `index.mjs` 中相關程式碼，並發送 PR
- 翻譯檔由程式產生，因此勿直接修改 `translation_DysonSphereProgram.json` 檔案。