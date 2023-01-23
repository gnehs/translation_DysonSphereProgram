import fetch from 'node-fetch';
import fs from 'fs';
import colors from 'colors';
import asyncPool from "tiny-async-pool";

const converter_TW = async (text) => {
  const res = await fetch("https://api.zhconvert.org/convert", {
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      text,
      converter: "Taiwan",
      modules: JSON.stringify({
        "Computer": 1,
        "QuotationMark": 1,
      })
    }),
    method: "POST",
  }).then(res => res.json());
  return res.data.text
}


let data = JSON.parse(fs.readFileSync('./src/translation_DysonSphereProgram.json', 'utf8'));
let count = 0;

const convert = async item => {
  let t = item[1]
  let retry = 0
  while (retry < 3) {
    try {
      t = await converter_TW(t)
      break
    } catch (e) {
      console.log(e)
      retry++
    }
  }
  t = t
    .replace(/點擊|單擊/g, '點選')
    .replace(/相應/g, '對應')
    .replace(/性能/g, '效能')
    .replace(/當前/g, '目前')
    .replace(/工作/g, '運作')
    .replace(/查看/g, '檢視')
  count++
  console.log(``)
  console.log(`簡`.white.bgBlue + ' ' + item[1])
  console.log(`繁`.white.bgGreen + ' ' + t)
  console.log(`${(count / Object.entries(data).length * 100).toFixed(4)}% - ${count} - ${Object.entries(data).length}`.gray)
  data[item[0]] = t
  return t
}

for await (let t of asyncPool(5, Object.entries(data), convert)) {
  // console.log(t)
}

fs.writeFileSync('./res/translation_DysonSphereProgram.json', JSON.stringify(data, null, 2), 'utf8');

console.log(``)
console.log(`轉換完成`.white.bgGreen)
console.log(`本程式使用了繁化姬的 API 服務。 https://zhconvert.org/`.red)