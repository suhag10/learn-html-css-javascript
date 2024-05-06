# JS - Duplicate Content

**HTML**
```html
<h1>JS Duplicate Content</h1><br>

<div class="container">
  <!-- Original -->
  <div class="navbar">
    <ol>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet.</li>
    </ol>
  </div>

  <!-- Duplicate -->
  <div class="duplicate"></div>
</div>
```
**CSS**
```css
h1 { text-align: center; }

.container {
  display: flex;
  justify-content: center;
}

ol li {
  background: #aec9db;
  padding: 2px 10px;
  margin: 2px 0;
}
```

**JavaScript**
```js
const element = document.querySelector( ".navbar" );
const nav     = document.querySelector( ".duplicate" );

if (  element && nav ) {
  nav.insertAdjacentHTML( "beforeend", element.innerHTML );
}
```
