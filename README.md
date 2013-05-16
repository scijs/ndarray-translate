ndarray-translate
=================
Shifts an [ndarray](https://github.com/mikolalysenko/ndarray) by some integer shift.

## Example

```javascript
var lena = require("luminance")(require("lena"))
var translate = require("ndarray-translate")

translate(lena, [100, 180])

require("save-pixels")(lena, "png").pipe(process.stdout)
```

This generates the following image:

<img src="example/shift.png">

## Install

    npm install ndarray-translate
    

### `require("ndarray-translate")(array, shift)`
Translates `array` by `shift` amount in place.

* `array` is an ndarray
* `shift` is a vector with length equal to the dimension of the array representing the amount to shfit by.  Coordinates for the shift get rounded to nearest integer.

**Returns** `array`

# Credits
(c) 2013 Mikola Lysenko. MIT License


