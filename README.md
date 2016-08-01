# Toolbox

一个小型的项目，帮助新手体会一下如何做出可以看、可以用的原生界面。

## 包含内容

- div、input、text、image、wxc-button 等组件
- 组件分割与嵌套
- repeat 这样的显示逻辑控制方式
- onclick、oninput 这样的事件
- `{{  }}` 将数据插入模板
- Stream 模块的 fetch API 网络请求
- Modal 模块的 alert API 警告框

## 如何使用

### 安装

```bash
npm install
```

### 预览

* `npm run serve`: HTML 预览 `http://localhost:8080/`

![1]('https://raw.githubusercontent.com/hugojing/toolbox/master/images/1.png')

`http://localhost:8080/index.html?page=./dist/translate.js`

![2]('https://raw.githubusercontent.com/hugojing/toolbox/master/images/2.png')
![3]('https://raw.githubusercontent.com/hugojing/toolbox/master/images/3.png')

* 在 src 目录下 `weex main.we --qr`: Weex Playground 预览 首页

![4]('https://raw.githubusercontent.com/hugojing/toolbox/master/images/4.png')
* 在 src 目录下 `weex translate.we --qr`: Weex Playground 预览 翻译页

![5]('https://raw.githubusercontent.com/hugojing/toolbox/master/images/4.png')
![6]('https://raw.githubusercontent.com/hugojing/toolbox/master/images/4.png')

（Weex Playground 预览，需要安装 [weex-toolkit](http://alibaba.github.io/weex/doc/tools/cli.html) 才能使用 weex 命令；手机上需要使用 [Weex Playground app](http://alibaba.github.io/weex/download.html) 来扫描二维码）

### 开发

开发目录：`src`

输出目录：`dist`

* `npm run devserve`: 开发时热加载并 HTML 预览： `http://localhost:8080/` （改动后自动更新，但需手动刷新浏览器）
* `npm run dev`: 监视两个 .we 文件的改动，并自动打包输出为两个 .js 文件
* `npm run build`: 将两个 .we 文件打包为两个 .js 文件

（详情请参阅 `webpack.config.js` 和 `package.json`）

## 服务

有啥疑问，提 Issue 吧，我尽量帮你解答 :D
