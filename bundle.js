// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).table=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var t=require("path").resolve,r=require("@stdlib/fs-read-json").sync,n=t("/home/runner/work/datasets-us-states-capitals-names/datasets-us-states-capitals-names/lib","..","data","data.json"),o={encoding:"utf8"};return module.exports=function(){var e=r(n,o);if(e instanceof Error)throw e;return e},e(Object.freeze({__proto__:null}))}));
//# sourceMappingURL=bundle.js.map
