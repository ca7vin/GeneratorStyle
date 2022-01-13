// STYLE CONTAINER
let containerStyle = document.querySelector(".styleZone")
// COLORS
let btnWhite = document.getElementsByClassName("btnColor")[0]
let btnRed = document.getElementsByClassName("btnColor")[1]
let btnGreen = document.getElementsByClassName("btnColor")[2]
let btnBlue = document.getElementsByClassName("btnColor")[3]
// BORDER
let btnBorder = document.getElementsByClassName("btnBorder")[0]
let btnDashed = document.getElementsByClassName("btnBorder")[1]
let btnDotted = document.getElementsByClassName("btnBorder")[2]
// BORDER TOP
let btnTop1 = document.getElementsByClassName("btnTop")[0]
let btnTop2 = document.getElementsByClassName("btnTop")[1]
let btnTop3 = document.getElementsByClassName("btnTop")[2]
// COLOR PICKER
let btnColorPicker = document.getElementsByClassName("rectangle")[0]
// BORDER WIDTH
let inputBorderSize = document.getElementsByTagName("input")[1]
// EVENT LISTENER
// COLORS
btnWhite.addEventListener("click", () => {
    containerStyle.style.backgroundColor = "White"
})

btnRed.addEventListener("click", () => {
    containerStyle.style.backgroundColor = "#DC3545"
})

btnGreen.addEventListener("click", () => {
    containerStyle.style.backgroundColor = "#198754"
})

btnBlue.addEventListener("click", () => {
    containerStyle.style.backgroundColor = "#0D6EFD"
})

// BORDER
btnBorder.addEventListener("click", () => {
    containerStyle.style.borderStyle = "solid"
})

btnDashed.addEventListener("click", () => {
    containerStyle.style.borderStyle = "dashed"
})

btnDotted.addEventListener("click", () => {
    containerStyle.style.borderStyle = "dotted"
})


// COLOR PICKER
btnColorPicker.addEventListener("input", () => {
    containerStyle.style.backgroundColor = btnColorPicker.value
})

// BORDER TOP
btnTop1.addEventListener("click", () => {
    containerStyle.style.borderTop = "none"
})

btnTop2.addEventListener("click", () =>{
    containerStyle.style.borderTopWidth = "10px"
})

btnTop3.addEventListener("click", () =>{
    containerStyle.style.borderTopWidth = "20px"
})

// BORDER WIDTH
inputBorderSize.addEventListener("input", () => {
    containerStyle.style.borderWidth = +inputBorderSize.value + "px"
})