const main = document.querySelector('main')
const colorInput = document.getElementById('color-input')
const select = document.querySelector('select')
const form = document.querySelector('form')
const button = document.querySelector('button')
let color
let selectOption

colorInput.addEventListener('input', () => {
    color = colorInput.value
})

select.addEventListener('input', () => {
    selectOption = select.value
})

button.addEventListener('click', fetchAPI)

function fetchAPI () {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${selectOption}`)
        .then(res => res.json())
        .then(data => {
            renderColors(data.colors)
        })
}

function renderColors(colorsArray) {
    main.innerHTML = colorsArray.map(color => {
        return `
            <div class="color-div" 
            style="background-color: ${color.hex.value}">
            </div>
        `
    }).join('')
}