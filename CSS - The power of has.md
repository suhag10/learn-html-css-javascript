## CSS - The power of :has()

**HTML**
```html
<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Gallery</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
</nav>
```

**CSS**
```css
nav{
    background-color: #13171e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
}

a{
    margin-left: 20px;
    font-family: arial, sans-serif;
    font-weight: 900;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
}

/* + | ~ */
/* a:hover ~ a{opacity: 0.4;} */

nav:has(a:hover) > a:not(:hover){opacity: 0.4;}
```
