# [scrollbar-width.js](https://github.com/olmokramer/scrollbar-width.js) 3.2.1

scrollbar-width.js is a library for calculating the scrollbar size of a browser window. It is compatible with AMD, CommonJS and the standard browser environment.

## Installation/Usage

### AMD

Usage with AMD is straightforward:

```
require([
  'js/scrollbar-width'
], function(calcScrollbarWidth) {
  var scrollbarWidth = calcScrollbarWidth();
  // ...
});
```

### Node.js

Install with npm:

```
npm install https://github.com/crvst/scrollbar-width.js
```

Then require it and call the function:

```
var scrollbarWidth = require("scrollbar-width")();
```

### Browser

Include it in your HTML:

```
<script src="js/scrollbar-width.js"></script>
```

Then just call the function:

```
var scrollbarWidth = window.getScrollbarWidth();
```

## Notes

### Cached value

The function will cache the value it has calculated. You can force to calculate again by calling it with it's first parameter set to `true`:

```
var newScrollbarWidth = calcScrollbarWidth(true);
```

### scrollbarWidth() returns null

Until the document is loaded (document.readyState !== 'loading'), scrollbarWidth() will return null. So be sure to call it when the document has loaded.

## Compatibility

Tested in and compatible with:
- Chrome
- FireFox
- Opera
- IE (tested in 8+)

## Issues

If you find any issues, please file an issue on the
[github page](https://github.com/olmokramer/scrollbar-width.js/issues).

## Credits

Thanks to [olympicsoftware](https://github.com/olympicsoftware) for the improved version (2.0+)

## License

scrollbarWidth is licensed under the [MIT license](LICENSE).
