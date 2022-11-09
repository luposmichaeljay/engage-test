/*!
 * test-vue-engage v0.0.1
 * (c) 
 * Released under the ISC License.
 */
'use strict';

var vue = require('vue');

var script = {
  props: {
    title: {
      type: String,
      "default": 'Hello'
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("h1", null, vue.toDisplayString($props.title), 1 /* TEXT */);
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("Test", script);
  }
};

module.exports = index;
