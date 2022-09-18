document.getElementById("chartTitle").innerText = searchParam.get('title') || "Rapie"

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = `https://unavatar.io/github/${searchParam.get('gh')}`

TweenMax.from('#chart_div',1,{
    x:0,y:0,scale:0,ease:Elastic.easeOut,delay:0.4
})