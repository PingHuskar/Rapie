document.getElementById("chartTitle").innerText = searchParam.get('title') || "Rapie"

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = `https://unavatar.io/github/${searchParam.get('gh')}`