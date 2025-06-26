# CSS IF Function

**HTML Template**
```html
<div class="box" data-status="loading">CSS</div>
```

**CSS Condition 1**
```css
.box {
    background-color: if(
        media(width <= 600px): green;
        media(width <= 1000px): blue;
        else: red;
    );

    color: if(
        media(width <= 600px): aliceblue;
        media(width <= 1000px): yellow;
        else: white;
    );
}
```

**CSS Condition 2**
```css
.box {
    --theme: "eleven";

    background-color: if(
        style(--theme: "eleven"): green;
        else: red;
    );
}
```

**CSS Condition 3**
```css
.box {
    --status: attr(data-status);

    background-color: if(
        style(--status: "loading"): green;
        style(--status: "loaded"): blue;
        style(--status: "error"): red;
        else: black;
    );
}
```