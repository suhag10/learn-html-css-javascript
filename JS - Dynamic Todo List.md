# JS - Dynamic Todo List

**HTML**
```html
<h1>TODO List</h1>

<fieldset style="width: 270px;">
    <legend>Form</legend>
    <label>Write Your Name or anything else.<label><hr>
    <input type="search" name="item_name" id="item_name">
    <button onclick="addItem()" id="addbtn">Add New</button>
</fieldset>

<ol id="todoList"></ol>
```

**JavaScript**
```js
function addItem() {
    var item        = document.createElement( "li" );
    var input       = document.getElementById( "item_name" );
    var list        = document.getElementById( "todoList" );
    var textContent = input.value;

    if ( ! textContent ) {
        textContent += "Dynamic todo list";
    }

    item.appendChild( document.createTextNode( textContent ) );
    list.appendChild( item );
}
```
