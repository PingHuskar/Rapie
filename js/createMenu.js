document.getElementById('menu').innerHTML = `<div class="out">
    <input type="url" name="" id="res" onclick="viz(this.value)">
</div>
<div class="config">
    <div>
        <span>root : <span id="root" contenteditable oninput="main();"></span></span>
        <span>title : <span id="title" contenteditable oninput="main();"></span></span>
    </div>
    <div>
        <span>bg : <span id="bg" contenteditable oninput="main();"></span></span>
        <span>width : <span id="width" contenteditable oninput="main();"></span> px</span>
        <span>height : <span id="height" contenteditable oninput="main();"></span> px</span>
        <span>bordercolor : <span id="bordercolor" contenteditable oninput="main();"></span></span>
        <span>font-size : <span id="fontSize" contenteditable oninput="main();"></span></span>
        <span>hole : <input type="range" id="hole" min="0" max="1" step="0.05" oninput="main();"></span>
    </div>
</div>
<div class="btngroup">
    <a href="#" onclick="addlst()">Add a Row</a>
    <a href="#" onclick="rmlst()">Remove last Row</a>
</div>`