# JS - Checked Input Fill

**HTML**
```html
<input type="text" id="inputID" onchange="checkInputFill()" placeholder="Type Text..."/>
```

**CSS**
```css
input {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25px;
  width: 250px;
  border: 1px solid #ffc107;
}
```

**JavaScript**
```js
function checkInputFill() {
  var input = document.getElementById( "inputID" );
  
  if ( "" == input.value ) {
    input.style.backgroundColor = "yellow";
  } else {
    input.style.backgroundColor = "";
  }
}

checkInputFill();
```
