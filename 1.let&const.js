const { on, off } = require('./helper');
/**
 * 0x01 经典的循环闭包问题
 */
// 
off(() => {
  var arr = [];
  for(var i = 0; i < 10; i++){
    arr[i] = function(){ console.log(i); };
    // arr[i] = (function(idx){
    //   return function(){ console.log(idx); }
    // })(i);
  }
  console.log(i); // 这里还能读得到i的值
  arr.forEach(func => func());
});

// 改用let实现
off(() => {
  var arr = [];
  for(let i = 0; i < 10; i++){
    arr[i] = function(){ console.log(i); };
  }
  // console.log(i); // ReferenceError
  arr.forEach(func => func());
});
