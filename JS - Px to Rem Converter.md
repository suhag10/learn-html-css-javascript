# Px to Rem Converter

Here’s a simple JavaScript function to convert pixels (px) to rem units. This function assumes a default root font size of 16px, which is common in most browsers.

```js
function pxToRem(px, base = 16) {
  return px / base + 'rem';
}

// Example usage:
let remValue = pxToRem(32);  // Converts 32px to rem
console.log(remValue);       // Output: "2rem"
```

In this function:
- `px`: The pixel value you want to convert.
- `base`: The base font size in pixels (default is 16px). You can adjust this if the root font size of your document is different.
