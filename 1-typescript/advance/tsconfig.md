# tsconfig

```json
{

  "compilerOptions": {
    "target": "es5",  //指定編譯生成的JS版本
    "module": "commonjs", //指定生成哪種模組
    "strict": true,  //採用嚴格模式
    "esModuleInterop": true,  //兼容模組導入的方式
  },
  "files": [ "index.ts", ], // 指定編譯檔案
  "include": ["src/**/*"], // 萬用字元指定
  "exclude": ["node_modules", "**/*.spec.ts"] // 萬用字元指定
}
```

## compilerOptions屬性

[官方設定](https://www.typescriptlang.org/tsconfig)


項目 | 型別 | 預設值 | 說明
--------------|:--------- |-----------:|:---
基礎設定選項 | - | - | -
target | string | "ES3" | 指定輸出的JS版本，可選ES3（預設）、 ES5 、 ES6/ ES2015 、 ES2016 、 ES2017 或 ESNext
module | string | 若target設為"ES3"或"ES5"，則預設為"CommonJS";其他預設為"ES6" | 可選 None、 CommonJS、AMD、System、UMD、ES6、ES2015 或 ESNext
lib | string[] | 無 | 編譯需要引入的特定函式庫檔案
noLib | boolean | false | 不包含預設的函式庫檔案(lib.d.ts)
allowJs | boolean | false | 允許JS檔案(.js或.jsx)編譯
checkJs | boolean | false | 在.js檔案中回報錯誤。和allowJs搭配使用
jsx | string | "preserve" | 支援.tsx檔名的特定JSX檔案，可選preserve(預設)、react-native 或 react
declaration | boolean | false | 生成相對應的裝飾檔案(.d.ts)
outFile | string | 無 | 輸出全部整合到此檔案，例如："./dist/app.js"
outDir | string | 無 | 重新設定輸入資料夾，例如"./dist"
removeComments | boolean | false | 移除註解
noEmit | boolean | false | 不產生輸出檔案
noEmitOnError | boolean | false | 當有錯誤時不產生輸出檔案
downlevelIteration | boolean | false | 當target的JS版本為ES3或ES5時，會將for..of, spread 和 destructuring ES6新語法降級
檢查模式選項 | - | - | -
strict | boolean | false | 啟用所有嚴格類型檢查模式，相當於noImplicitAny、noImplicitThis、alwaysStrict、strictBindCallApply、strictNullChecks、strictFunctionTypes 和 strictPropertyInitialization的設定為true
alwaysStrict | boolean | false | 以嚴格模式解析，輸出每個檔案都加上"use strict"
noImplicitAny | boolean | false | 隱含推論型別為any時報錯
noImplicitThis | boolean | false | 當this表達式的值為any型別時報錯
skipLibCheck | boolean | false | 不檢查所有的裝飾檔案(.d.ts)
allowUnreachableCode | boolean | false | 允許有未執行的程式碼，不報錯
allowUnusedLabels | boolean | false | 允許有未使用的標籤，不報錯
noUnusedLocals | boolean | false | 當有未使用的local變數時報錯
noUnusedParameters | boolean | false | 當有未使用的函式參數時報錯
module解析選項 | - | - | -
experimentalDecorators | boolean | false | 允許使用實驗階段的decorators
allowSyntheticDefaultImports | boolean | 只有在module為"system"或esModuleInterop為true時才使用 | -
esModuleInterop | boolean | false | 兼容 CommonJS module 引入，符合 ES6 module 規範