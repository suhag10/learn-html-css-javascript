# JS - Mouseover Effects

**HTML**
```html
<a href="#" class="mhover">Mouse Hover</a>
```

**JavaScript**
```js
var body   = document.body;
var mhover = document.querySelector('a.mhover');

body.style.textAlign  = 'center';
body.style.marginTop  = '30px';
body.style.fontFamily = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

mhover.addEventListener('mouseover',function(){
    this.style.color               = 'rgb(255 255 255 / 1)';
    this.style.fontWeight          = 500;
    this.style.backgroundColor     = "rgb(51 65 85 / 1)";
    this.style.textDecorationColor = '#6366f1';
    this.style.textDecorationLine  = 'underline';
    this.style.borderStyle         = 'hidden';
    this.style.border              = '0px solid #d1d5db'
});

mhover.addEventListener('mouseleave',function(){
    this.style.color               = '#334155';
    this.style.fontSize            = '.8125rem';
    this.style.fontWeight          = '';
    this.style.textDecoration      = '';
    this.style.textDecorationColor = '';
    this.style.textDecorationLine  = 'none';
    this.style.backgroundColor     = 'rgb(255 255 255 / 1 )';
    this.style.marginInlineEnd     = '0.5rem';
    this.style.marginBottom        = '0.5rem';
    this.style.borderRadius        = '0.5rem';
    this.style.padding             = '0.625rem 1.25rem 0.625rem 1.25rem';
    this.style.border              = '1px solid #d1d5db'
    this.style.cursor              = 'pointer';
})
```
