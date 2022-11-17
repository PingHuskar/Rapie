const main = () => {
    const f1 = document.getElementsByClassName('col1')
    const f2 = document.getElementsByClassName('col2')
    const recordCount = f1.length
    // console.log(recordCount)
    const c1 = document.getElementById('col1')
    const c2 = document.getElementById('col2')

    const colors = document.getElementsByClassName('color')
    let dataTemp = []
    let colorTemp = []
    for (let color of colors) {
        colorTemp.push(color.innerText)
    }
    for (var i = 0; i<recordCount;i++) {
        dataTemp.push(`${f1[i].innerText}=${f2[i].innerText}`)
    }
    // console.log(colorTemp.toString())
    // console.log(dataTemp.join(","))
    
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
        // console.log(recordCount)
        res.value = `No Data`
    }
    const url = new URL(location)
    url.searchParams.set(`title`, title.innerText)
    url.searchParams.set(`root`, root.innerText)
    url.searchParams.set(`bg`, bg.innerText)
    url.searchParams.set(`width`, width.innerText)
    url.searchParams.set(`height`, height.innerText)
    url.searchParams.set(`bordercolor`, bordercolor.innerText)
    url.searchParams.set(`fontSize`, fontSize.innerText)
    url.searchParams.set(`hole`, hole.value)
    url.searchParams.set(`col1`, c1.innerText)
    url.searchParams.set(`col2`, c2.innerText)
    url.searchParams.set(`color`, colorTemp.join(","))
    url.searchParams.set(`data`, dataTemp.join(","))
    // console.log(url)
    // console.log(url.search)
    history.pushState({}, '', url)  
}
const appendRec = () => {
    const f1 = document.getElementsByClassName('col1')
    TweenMax.fromTo(`#rec${f1.length}`,0.1 , {
        x: screen.width*1.5,autoAlpha:0,ease:Linear.easeNone
    },{
        x: 0,autoAlpha:1,ease:Linear.easeNone
    })
    setTimeout(main,100)
    // main()
}
const addlst = () => {
    var tbody = document.getElementsByTagName('tbody')[0]
    const f1 = document.getElementsByClassName('col1')
    const defaultValue = 1
    const charList = `abcdefghijklmnopqurstuwxyzABCDEFGHIJKLMNOPQURSTUWXYZ`
    // https://htmlcolorcodes.com/color-names/
    // var predefColor = ["IndianRed","LightCoral","Salmon","DarkSalmon","LightSalmon","Crimson","Red","FireBrick","DarkRed","Pink","LightPink","HotPink","DeepPink","MediumVioletRed","PaleVioletRed","LightSalmon","Coral","Tomato","OrangeRed","DarkOrange","Orange","Gold","Yellow","LightYellow","LemonChiffon","LightGoldenrodYellow","PapayaWhip","Moccasin","PeachPuff","PaleGoldenrod","Khaki","DarkKhaki","Lavender","Thistle","Plum","Violet","Orchid","Fuchsia","Magenta","MediumOrchid","MediumPurple","RebeccaPurple","BlueViolet","DarkViolet","DarkOrchid","DarkMagenta","Purple","Indigo","SlateBlue","DarkSlateBlue","MediumSlateBlue","GreenYellow","Chartreuse","LawnGreen","Lime","LimeGreen","PaleGreen","LightGreen","MediumSpringGreen","SpringGreen","MediumSeaGreen","SeaGreen","ForestGreen","Green","DarkGreen","YellowGreen","OliveDrab","Olive","DarkOliveGreen","MediumAquamarine","DarkSeaGreen","LightSeaGreen","DarkCyan","Teal","Aqua","Cyan","LightCyan","PaleTurquoise","Aquamarine","Turquoise","MediumTurquoise","DarkTurquoise","CadetBlue","SteelBlue","LightSteelBlue","PowderBlue","LightBlue","SkyBlue","LightSkyBlue","DeepSkyBlue","DodgerBlue","CornflowerBlue","MediumSlateBlue","RoyalBlue","Blue","MediumBlue","DarkBlue","Navy","MidnightBlue","Cornsilk","BlanchedAlmond","Bisque","NavajoWhite","Wheat","BurlyWood","Tan","RosyBrown","SandyBrown","Goldenrod","DarkGoldenrod","Peru","Chocolate","SaddleBrown","Sienna","Brown","Maroon","White","Snow","HoneyDew","MintCream","Azure","AliceBlue","GhostWhite","WhiteSmoke","SeaShell","Beige","OldLace","FloralWhite","Ivory","AntiqueWhite","Linen","LavenderBlush","MistyRose","Gainsboro","LightGray","Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black"]
    var predefColor = ["indianred","lightcoral","salmon","darksalmon","lightsalmon","crimson","red","firebrick","darkred","pink","lightpink","hotpink","deeppink","mediumvioletred","palevioletred","lightsalmon","coral","tomato","orangered","darkorange","orange","gold","yellow","lightyellow","lemonchiffon","lightgoldenrodyellow","papayawhip","moccasin","peachpuff","palegoldenrod","khaki","darkkhaki","lavender","thistle","plum","violet","orchid","fuchsia","magenta","mediumorchid","mediumpurple","rebeccapurple","blueviolet","darkviolet","darkorchid","darkmagenta","purple","indigo","slateblue","darkslateblue","mediumslateblue","greenyellow","chartreuse","lawngreen","lime","limegreen","palegreen","lightgreen","mediumspringgreen","springgreen","mediumseagreen","seagreen","forestgreen","green","darkgreen","yellowgreen","olivedrab","olive","darkolivegreen","mediumaquamarine","darkseagreen","lightseagreen","darkcyan","teal","aqua","cyan","lightcyan","paleturquoise","aquamarine","turquoise","mediumturquoise","darkturquoise","cadetblue","steelblue","lightsteelblue","powderblue","lightblue","skyblue","lightskyblue","deepskyblue","dodgerblue","cornflowerblue","mediumslateblue","royalblue","blue","mediumblue","darkblue","navy","midnightblue","cornsilk","blanchedalmond","bisque","navajowhite","wheat","burlywood","tan","rosybrown","sandybrown","goldenrod","darkgoldenrod","peru","chocolate","saddlebrown","sienna","brown","maroon","white","snow","honeydew","mintcream","azure","aliceblue","ghostwhite","whitesmoke","seashell","beige","oldlace","floralwhite","ivory","antiquewhite","linen","lavenderblush","mistyrose","gainsboro","lightgray","silver","darkgray","gray","dimgray","lightslategray","slategray","darkslategray","black"]
    var toRemoveColor = ["saddlebrown","deeppink","moccasin","cadetblue","aliceblue","deepskyblue","white","black", "rebeccapurple"]
    // https://stackoverflow.com/questions/19957348/remove-all-elements-contained-in-another-array
    predefColor = predefColor.filter( ( el ) => !toRemoveColor.includes( el ) )
    
    setTimeout(appendRec, 50)
    tbody.innerHTML += `<tr id="rec${f1.length+1}">
        <td>${f1.length+1}</td>
        <td class="col1" contenteditable oninput="main();">${charList[Math.floor(Math.random()*charList.length)]}</td>
        <td class="col2" contenteditable oninput="main();">${defaultValue}</td>
        <td class="color" contenteditable oninput="main();">${predefColor[Math.floor(Math.random()*predefColor.length)]}</td>
    </tr>`
    
    
}
const removeRec = () => {
    // console.log('removeRec')
    var table = document.getElementsByTagName('table')[0]
    var rowCount = table.rows.length
    document.getElementsByTagName('table')[0].deleteRow(rowCount -1)
    setTimeout(main,100)
}

const rmlst = () => {
    var table = document.getElementsByTagName('table')[0]
    var rowCount = table.rows.length
    
    if (rowCount > 1) {
        console.log(table.rows[rowCount-1].innerText)
        setTimeout(removeRec, 50)
        // console.log('animation')
        const f1 = document.getElementsByClassName('col1')
        TweenMax.fromTo(`#rec${f1.length}`,0.05 , {
            x: 0,autoAlpha:1,ease:Linear.easeNone
        },{
            x: -screen.width*1.5,autoAlpha:0.1,ease:Linear.easeNone
        })
    }
    else {
        alert('No Record to remove')
    }
}

const prefilled = () => {
    const searchParam = new URLSearchParams(location.search)
    const root = document.getElementById('root')
    const title = document.getElementById('title')
    const bg = document.getElementById('bg')
    const width = document.getElementById('width')
    const height = document.getElementById('height')
    const bordercolor = document.getElementById('bordercolor')
    const fontSize = document.getElementById('fontSize')
    const hole = document.getElementById('hole')
    const c1 = document.getElementById('col1')
    const c2 = document.getElementById('col2')
    title.innerText = `${searchParam.get("title") || "xMaple Pie Chart"}`
    root.innerText = `${searchParam.get("root") || "https://pinghuskar.github.io/Rapie/"}`
    bg.innerText = `${searchParam.get("bg") || "white"}`
    width.innerText = `${searchParam.get("width") || "500"}`
    height.innerText = `${searchParam.get("height") || "400"}`
    bordercolor.innerText = `${searchParam.get("bordercolor") || "none"}`
    fontSize.innerText = `${searchParam.get("fontSize") || "20"}`
    hole.value = `${searchParam.get("hole") || "0.5"}`
    c1.innerText = `${searchParam.get("col1") || "Category"}`
    c2.innerText = `${searchParam.get("col2") || "Numeric"}`
    
    if (location.search !== '') {
        const recordCount = searchParam.get("data").split(',').length
        // alert(recordCount)
        var tbody = document.getElementsByTagName('tbody')[0]
        var record = searchParam.get("data").split(',')
        var colors = searchParam.get("color").split(',')
        for (var i = 0; i<recordCount;i++) {
            tbody.innerHTML += `<tr>
            <td>${i+1}</td>
            <td class="col1" contenteditable oninput="main();">${record[i].split('=')[0]}</td>
            <td class="col2" contenteditable oninput="main();">${record[i].split('=')[1]}</td>
            <td class="color" contenteditable oninput="main();">${colors[i]}</td>
            </tr>`
        }
        TweenMax.staggerFromTo('tr',0.1,{
            x:screen.width*1.5,autoAlpha:0,ease:Linear.easeNone,delay:0.1
        },{
            x:0,autoAlpha:1,ease:Linear.easeNone,delay:0.1
        },0.04)
        setTimeout(main,700)
    }
    else {   
        addlst()
    }
}

const viz = (url) => {
    if (url !== '') {
        open(url,`_blank`)
    }
}

prefilled()