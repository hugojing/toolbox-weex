/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/f00bf4c8cf8f63a43a101bcdff44cdec", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  var b = __webpack_require__(1).b
	  console.log(b)
	  __webpack_require__(3)
	  __webpack_require__(4)
	  __webpack_require__(5)
	  __weex_module__.exports = {
	    data: function () {return {}},
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "bg"
	  ],
	  "children": [
	    {
	      "type": "logo"
	    },
	    {
	      "type": "searchbar"
	    },
	    {
	      "type": "common",
	      "classList": [
	        "common"
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "bg": {
	    "backgroundColor": "#F2F2F2"
	  },
	  "common": {
	    "position": "absolute",
	    "bottom": 10
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/f00bf4c8cf8f63a43a101bcdff44cdec", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/index", [], function(__weex_require__, __weex_exports__, __weex_module__){
	var a = __webpack_require__(2).whoami
	exports.b = a

	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/a", [], function(__weex_require__, __weex_exports__, __weex_module__){
	exports.whoami = '123'

	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/searchbar", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {}},
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "input",
	      "classList": [
	        "searchbar"
	      ],
	      "attr": {
	        "type": "text",
	        "placeholder": "一个输入框"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "searchbar": {
	    "height": 100,
	    "padding": 10,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "fontSize": 30,
	    "borderRadius": 5,
	    "backgroundColor": "#ffffff"
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/common", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      root: 'dist',
	      item: { name: 'translate' },
	      tools: ['http://hbimg.b0.upaiyun.com/72fa4f426ccae79476bbbc2ef723c388cf5f02ffeb96-zYEnwV_fw658',
	              'http://hbimg.b0.upaiyun.com/028bb24be05e2eac593340d850457051df0ba5af9963-FALRwW_fw658',
	              'http://hbimg.b0.upaiyun.com/a87362da296c22ae174b64375a36cbc8637f99411236-i8wifg_fw658',
	              'http://hbimg.b0.upaiyun.com/c427bbd74af50b21aeba870794e46b63367b5f6f1b57-DT6c1N_fw658'],
	      img: 'http://hbimg.b0.upaiyun.com/bbba96a35c57e7dc1e53e7d278e44e1fd68beb09713c-Tf9wre_fw658'
	    }},
	    methods: {
	      openTranslate: function () {
	        var bundleUrl = this.$getConfig().bundleUrl
	        console.log('hit', bundleUrl)
	        var dirs = this.root.split('/');
	        dirs.forEach(function(dir, index) {
	          if (!dir) dirs.splice(index, 1);
	        });
	        var root = dirs.length > 0 ? dirs[0] : '';
	        var subRoot = dirs.length > 1 ? dirs.slice(1).join('/') + '/' : '';
	        console.log('open translate page')
	        //如果pc调试，加载这个页面渲染
	        var base = './index.html?page=./' + root + '/' + subRoot
	        this.$openURL(base + this.item.name + '.js')
	      },
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "bg"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "value": "最常使用"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tools"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.tools},
	            "value": "tool"
	          },
	          "classList": [
	            "tool"
	          ],
	          "events": {
	            "click": function ($event) {this.openTranslate($event)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 120,
	                "height": 120
	              },
	              "attr": {
	                "src": function () {return this.tool}
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "width": 120,
	                "height": 20
	              },
	              "classList": [
	                "subtitle"
	              ],
	              "attr": {
	                "value": function () {return '翻译'+this.$index}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "bg": {
	    "borderRadius": 5,
	    "borderWidth": 1,
	    "borderColor": "#dadada",
	    "backgroundColor": "#F7F7F7",
	    "margin": 20,
	    "width": 710
	  },
	  "title": {
	    "fontSize": 30,
	    "left": 30,
	    "top": 30
	  },
	  "tools": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "marginTop": 20
	  },
	  "tool": {
	    "justifyContent": "center",
	    "width": 120,
	    "height": 200,
	    "margin": 20
	  },
	  "subtitle": {
	    "textAlign": "center",
	    "fontSize": 18,
	    "marginTop": 20,
	    "marginBottom": 20
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/logo", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {}},
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "bg"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "width": 400,
	        "height": 400
	      },
	      "attr": {
	        "src": "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "bg": {
	    "alignItems": "center"
	  }
	})
	})

/***/ }
/******/ ]);