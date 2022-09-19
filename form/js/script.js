const main = () => {
    const f1 = document.getElementsByClassName('col1')
    const f2 = document.getElementsByClassName('col2')
    const recordCount = f1.length
    // console.log(recordCount)
    if (recordCount > 0) {
    const res = document.getElementById('res')
    const root = document.getElementById('root')
    const title = document.getElementById('title')
    const bg = document.getElementById('bg')
    const width = document.getElementById('width')
    const height = document.getElementById('height')
    const bordercolor = document.getElementById('bordercolor')
    const fontSize = document.getElementById('fontSize')
    const hole = document.getElementById('hole')
    const colors = document.getElementsByClassName('color')
    const c1 = document.getElementById('col1')
    const c2 = document.getElementById('col2')
    let colorTemp = []
    let dataTemp = []
    for (let color of colors) {
        colorTemp.push(color.innerText)
    }
    // console.log(colorTemp.toString())
    for (var i = 0; i<recordCount;i++) {
        dataTemp.push(`${f1[i].innerText}=${f2[i].innerText}`)
    }
    // console.log(dataTemp.join(","))
    
    const form = {
        title: title.innerText,
        bg: bg.innerText.toLowerCase(),
        h: height.innerText,
        w: width.innerText,
        border: bordercolor.innerText,
        fz: fontSize.innerText,
        hole: hole.value,
        col1: c1.innerText,
        col2: c2.innerText,
        color: colorTemp.toString(),
        
    };
    res.value = `${root.innerText}?${new URLSearchParams(form).toString()}&data=${dataTemp.join(",")}`
            
    }
    else {
        console.log(recordCount)
    }
}

main()

const addlst = () => {
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.getElementsByTagName('tbody')[0];
    const f1 = document.getElementsByClassName('col1')
    // https://htmlcolorcodes.com/color-names/
    // var predefColor = ["IndianRed","LightCoral","Salmon","DarkSalmon","LightSalmon","Crimson","Red","FireBrick","DarkRed","Pink","LightPink","HotPink","DeepPink","MediumVioletRed","PaleVioletRed","LightSalmon","Coral","Tomato","OrangeRed","DarkOrange","Orange","Gold","Yellow","LightYellow","LemonChiffon","LightGoldenrodYellow","PapayaWhip","Moccasin","PeachPuff","PaleGoldenrod","Khaki","DarkKhaki","Lavender","Thistle","Plum","Violet","Orchid","Fuchsia","Magenta","MediumOrchid","MediumPurple","RebeccaPurple","BlueViolet","DarkViolet","DarkOrchid","DarkMagenta","Purple","Indigo","SlateBlue","DarkSlateBlue","MediumSlateBlue","GreenYellow","Chartreuse","LawnGreen","Lime","LimeGreen","PaleGreen","LightGreen","MediumSpringGreen","SpringGreen","MediumSeaGreen","SeaGreen","ForestGreen","Green","DarkGreen","YellowGreen","OliveDrab","Olive","DarkOliveGreen","MediumAquamarine","DarkSeaGreen","LightSeaGreen","DarkCyan","Teal","Aqua","Cyan","LightCyan","PaleTurquoise","Aquamarine","Turquoise","MediumTurquoise","DarkTurquoise","CadetBlue","SteelBlue","LightSteelBlue","PowderBlue","LightBlue","SkyBlue","LightSkyBlue","DeepSkyBlue","DodgerBlue","CornflowerBlue","MediumSlateBlue","RoyalBlue","Blue","MediumBlue","DarkBlue","Navy","MidnightBlue","Cornsilk","BlanchedAlmond","Bisque","NavajoWhite","Wheat","BurlyWood","Tan","RosyBrown","SandyBrown","Goldenrod","DarkGoldenrod","Peru","Chocolate","SaddleBrown","Sienna","Brown","Maroon","White","Snow","HoneyDew","MintCream","Azure","AliceBlue","GhostWhite","WhiteSmoke","SeaShell","Beige","OldLace","FloralWhite","Ivory","AntiqueWhite","Linen","LavenderBlush","MistyRose","Gainsboro","LightGray","Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black"]
    var predefColor = ["indianred","lightcoral","salmon","darksalmon","lightsalmon","crimson","red","firebrick","darkred","pink","lightpink","hotpink","deeppink","mediumvioletred","palevioletred","lightsalmon","coral","tomato","orangered","darkorange","orange","gold","yellow","lightyellow","lemonchiffon","lightgoldenrodyellow","papayawhip","moccasin","peachpuff","palegoldenrod","khaki","darkkhaki","lavender","thistle","plum","violet","orchid","fuchsia","magenta","mediumorchid","mediumpurple","rebeccapurple","blueviolet","darkviolet","darkorchid","darkmagenta","purple","indigo","slateblue","darkslateblue","mediumslateblue","greenyellow","chartreuse","lawngreen","lime","limegreen","palegreen","lightgreen","mediumspringgreen","springgreen","mediumseagreen","seagreen","forestgreen","green","darkgreen","yellowgreen","olivedrab","olive","darkolivegreen","mediumaquamarine","darkseagreen","lightseagreen","darkcyan","teal","aqua","cyan","lightcyan","paleturquoise","aquamarine","turquoise","mediumturquoise","darkturquoise","cadetblue","steelblue","lightsteelblue","powderblue","lightblue","skyblue","lightskyblue","deepskyblue","dodgerblue","cornflowerblue","mediumslateblue","royalblue","blue","mediumblue","darkblue","navy","midnightblue","cornsilk","blanchedalmond","bisque","navajowhite","wheat","burlywood","tan","rosybrown","sandybrown","goldenrod","darkgoldenrod","peru","chocolate","saddlebrown","sienna","brown","maroon","white","snow","honeydew","mintcream","azure","aliceblue","ghostwhite","whitesmoke","seashell","beige","oldlace","floralwhite","ivory","antiquewhite","linen","lavenderblush","mistyrose","gainsboro","lightgray","silver","darkgray","gray","dimgray","lightslategray","slategray","darkslategray","black"]
    tbody.innerHTML += `<tr>
                    <td>${f1.length+1}</td>
                    <td class="col1" contenteditable oninput="main();"></td>
                    <td class="col2" contenteditable oninput="main();">0</td>
                    <td class="color" contenteditable oninput="main();">${predefColor[Math.floor(Math.random()*predefColor.length)]}</td>
                </tr>`
}
const rmlst = () => {
    var table = document.getElementsByTagName('table')[0];
    var rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
}