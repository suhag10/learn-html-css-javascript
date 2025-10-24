# JS - Tabs

**HTML**
```html
<div class="tab">
    <button type="button" class="tab__links">HTML</button>
    <button type="button" class="tab__links active">CSS</button>
    <button type="button" class="tab__links">JAVASCRIPT</button>
</div>

<div class="tab__container">
    <div class="tab__content">Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.</div>
    <div class="tab__content tab-open">Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.</div>
    <div class="tab__content">JavaScript is a programming language and core technology of the Web.</div>
</div>
```

**CSS**
```css
.tab__links.active {
    background: #007BFF;
    color: #fff;
}
.tab__content {
    display: none;
}
.tab__content.tab-open {
    display: block;
}
```

**JavaScript**
```js
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab__links");
    const contents = document.querySelectorAll(".tab__content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to clicked tab
            this.classList.add("active");

            // Hide all contents
            contents.forEach(c => c.classList.remove("tab-open"));
            // Show content related to clicked tab
            contents[index].classList.add("tab-open");
        });
    });
});
```