(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1941:function(t,a,e){"use strict";e.r(a);var s=e(16),i={name:"DatepickerDemo",mounted:function(){s.c.index()},data:function(){return{date:new Date,basicConfig:{},basicTimeConfig:{enableTime:!0,dateFormat:"Y-m-d H:i"},basicMinTimeConfig:{minDate:"today"},basicMaxDateConfig:{maxDate:"today"},basicMultipleDateConfig:{mode:"multiple",dateFormat:"Y-m-d"},basicRangeDateConfig:{mode:"range"}}},methods:{onChangeDateOption:function(){}}},n=e(8),c=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("iq-card",{attrs:{"body-class":"pt-0"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Basic Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[e("span",{staticClass:"text-danger"},[t._v("flatpickr")]),t._v(" without any config.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"basic-datepicker"}},[e("code",[t._v('\n<template>\n<flat-pickr class="form-control" :config="basicConfig" placeholder="Select Date"></flat-pickr>\n</template>\n<script>\nexport default {\n  name: \'DatepickerDemo\',\ndata(){\n  return {\n      basicConfig: {}\n    }\n   }\n  }\n<\/script>\n')])])])])]),t._v(" "),e("flat-pickr",{staticClass:"form-control",attrs:{value:"",config:t.basicConfig,placeholder:"Select Date"}})]},proxy:!0}])})],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("iq-card",{attrs:{"body-class":"pt-0"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Basic Datetime Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[e("span",{staticClass:"text-danger"},[t._v("flatpickr")]),t._v(" with date and time config.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"basic-datepicker-time"}},[e("code",[t._v('\n<template>\n<flat-pickr class="form-control" :config="basicTimeConfig" placeholder="Select DateTime"></flat-pickr>\n</template>\n<script>\nexport default {\n  name: \'DatepickerDemo\',\ndata(){\n  return {\n       basicTimeConfig: {\n        enableTime: true,\n        dateFormat: \'Y-m-d H:i\'\n      }\n    }\n   }\n  }\n<\/script>\n')])])])])]),t._v(" "),e("flat-pickr",{staticClass:"form-control",attrs:{value:"",config:t.basicTimeConfig,placeholder:"Select DateTime"}})]},proxy:!0}])})],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("iq-card",{attrs:{"body-class":"pt-0"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Basic Mindate Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[e("span",{staticClass:"text-danger"},[t._v("flatpickr")]),t._v(" with min date config.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"basic-Min-datepicker"}},[e("code",[t._v('\n<template>\n<flat-pickr class="form-control" :config="basicMinTimeConfig" placeholder="Select Date"></flat-pickr>\n</template>\n<script>\nexport default {\n  name: \'DatepickerDemo\',\ndata(){\n  return {\n       basicMinTimeConfig: {\n        minDate: \'2020-01\'\n      }\n    }\n   }\n  }\n<\/script>\n')])])])])]),t._v(" "),e("flat-pickr",{staticClass:"form-control",attrs:{value:"",config:t.basicMinTimeConfig,placeholder:"Select Date"}})]},proxy:!0}])})],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("iq-card",{attrs:{"body-class":"pt-0"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Basic Maxdate Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[e("span",{staticClass:"text-danger"},[t._v("flatpickr")]),t._v(" with max date config.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"basic-Disable-datepicker"}},[e("code",[t._v("\n<template>\n <flat-pickr class=\"form-control\" :config=\"basicMaxDateConfig\" placeholder=\"Select Date\"></flat-pickr>\n</template>\n<script>\nexport default {\n  name: 'DatepickerDemo',\ndata(){\n  return {\n        basicMaxDateConfig: {\n        disable: [ '2020-01-30', '2020-02-21', '2020-03-08', new Date(2025, 4, 9) ],\n        dateFormat: 'Y-m-d'\n      }\n    }\n   }\n  }\n<\/script>\n")])])])])]),t._v(" "),e("flat-pickr",{staticClass:"form-control",attrs:{value:"",config:t.basicMaxDateConfig,placeholder:"Select Date"}})]},proxy:!0}])})],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("iq-card",{attrs:{"body-class":"pt-0"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Basic Multipledate Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[e("span",{staticClass:"text-danger"},[t._v("flatpickr")]),t._v(" with multiple date config.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"basic-Multiple-datepicker"}},[e("code",[t._v("\n<template>\n <flat-pickr class=\"form-control\" :config=\"basicMultipleDateConfig\" placeholder=\"Select Date\"></flat-pickr>\n</template>\n<script>\nexport default {\n  name: 'DatepickerDemo',\ndata(){\n  return {\n        basicMultipleDateConfig: {\n        mode: 'multiple',\n        dateFormat: 'Y-m-d'\n      }\n    }\n   }\n  }\n<\/script>\n")])])])])]),t._v(" "),e("flat-pickr",{staticClass:"form-control",attrs:{value:"",config:t.basicMultipleDateConfig,placeholder:"Select Date"}})]},proxy:!0}])})],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("iq-card",{attrs:{"body-class":"pt-0"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Basic Rangedate Example")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[e("span",{staticClass:"text-danger"},[t._v("flatpickr")]),t._v(" with range date config.\n            ")]),t._v(" "),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-6"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"basic-Range-datepicker"}},[e("code",[t._v('\n<template>\n  <flat-pickr class="form-control" :config="basicRangeDateConfig" placeholder="Select Date"></flat-pickr>\n</template>\n<script>\nexport default {\n  name: \'DatepickerDemo\',\ndata(){\n  return {\n        basicRangeDateConfig: {\n        mode: \'range\'\n      }\n    }\n   }\n  }\n<\/script>\n')])])])])]),t._v(" "),e("flat-pickr",{staticClass:"form-control",attrs:{value:"",config:t.basicRangeDateConfig,placeholder:"Select Date"}})]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);a.default=c.exports}}]);
//# sourceMappingURL=78.js.map