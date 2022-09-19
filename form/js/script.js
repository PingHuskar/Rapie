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
    console.log(colorTemp.toString())
    for (var i = 0; i<recordCount;i++) {
        dataTemp.push(`${f1[i].innerText}=${f2[i].innerText}`)
    }
    console.log(dataTemp.toString())
    
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
        data: dataTemp.toString(),
    };
    res.value = `${root.innerText}?${new URLSearchParams(form).toString()}`
            
    }
}

main()