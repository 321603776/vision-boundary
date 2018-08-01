/* eslint-disable */
import Vue from 'vue'
//引入外部js
import './hammer'
 
 
function vueTouch(el,type,binding){
	this.el = el;
	this.type = type;
	this.binding = binding;
	//直接调用
  var hammertime = new Hammer(this.el);
  // hammertime.get('swipe').set({pointers: 2});
	hammertime.on(this.type,this.binding.value);
};
 
//包装成指令
const tap = Vue.directive("tap",{
    bind:function(el,binding){
        new vueTouch(el,"tap",binding);
    }
});
 
const swipeleft = Vue.directive("swipeleft",{
    bind:function(el,binding){
        new vueTouch(el,"swipeleft",binding);
    }
});

const bothleft = Vue.directive('bothleft',{
  bind: function (el, binding) {
    var hammertime = new Hammer(el);
    hammertime.get('swipe').set({pointers: 2});
    hammertime.on("swipeleft",binding.value);
  }
})
 
const swiperight = Vue.directive("swiperight",{
    bind:function(el,binding){
        new vueTouch(el,"swiperight",binding);
    }
});

const bothright = Vue.directive('bothright',{
  bind: function (el, binding) {
    var hammertime = new Hammer(el);
    hammertime.get('swipe').set({pointers: 2});
    hammertime.on("swiperight",binding.value);
  }
})
 
const press = Vue.directive("press",{
    bind:function(el,binding){
        new vueTouch(el,"press",binding);
    }
});
 
//导出需要的指令
export{tap,swipeleft,swiperight,press,bothleft,bothright}
