let toggleShowCustomTextOptions = false
function showCustomTextOptions() {
    let customFontForm = document.getElementById("customise-text")
    if (toggleShowCustomTextOptions === false) {
        customFontForm.style.visibility = 'visible'
        toggleShowCustomTextOptions = true
    } else {
        customFontForm.style.visibility = 'hidden'
        toggleShowCustomTextOptions = false
    }
    console.log(customFontForm.style.visibility)
}
function updateTextStyle () {
    let font = document.getElementById("font-select")
    let colour = document.getElementById("colour-select")
    let text = document.querySelectorAll("#text")
    let arrayLength = text.length
    for (let i = 0; i < arrayLength; i++) {
        text[i].style.fontFamily = font.value
    }
    for (let i = 0; i < arrayLength; i++) {
        text[i].style.color = colour.value
    }
}