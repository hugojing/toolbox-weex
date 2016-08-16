var modal
__weex_define__('@weex-temp/x', function (__weex_require__) {
  modal = __weex_require__('@weex-module/modal')
})

// 可以在任意位置调用该 native module APIs
modal.toast({message: 'hello'})

exports.whoami = '123'
