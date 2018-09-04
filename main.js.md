编译出来的`bundle.js`
----------------

```
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash')) :
    typeof define === 'function' && define.amd ? define(['lodash'], factory) :
    (factory(global._));
}(this, (function (lodash) { 'use strict';

    function hello (name) {
        return 'Hello, ' + lodash.capitalize(name) + '!'
    }

    hello('rollup');

})));
```