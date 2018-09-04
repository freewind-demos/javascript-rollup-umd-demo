编译出来的`bundle.js`
----------------

```
define(['lodash'], function (lodash) { 'use strict';

    function hello (name) {
        return 'Hello, ' + lodash.capitalize(name) + '!'
    }

    hello('rollup');

});
```