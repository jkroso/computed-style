# computed-style

Create an object representing the computed style values of a DOM element. Note it does
not attempt to fix in miscalculated properties due to browser bugs. Doing so would be too inneficient to be useful. Its just a low level shim for getComputedStyle

## API

```javascript
var style = require('computed-style')
```
