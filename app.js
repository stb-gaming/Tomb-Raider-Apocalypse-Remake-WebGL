const canvas = document.getElementById("canvas");
if (canvas) {
	canvas.id = "monogamecanvas";
}

const emscriptenThings = document.getElementsByClassName("emscripten");
const emscriptenBorderThings = document.getElementsByClassName("emscripten_border");

for (const element of emscriptenThings) {
	element.classList.replace("emscripten","monogame")
}
for (const element of emscriptenBorderThings) {
	element.classList.replace("emscripten_border","monogame_border")
}
loadRebinds(null,[{"button":"select","keys":["Enter"],"codes":["Enter"],"keyCodes":[13]}])
loadJS("TombTV.min.js",true)
loadJS("TombTV.meta.min.js",true)