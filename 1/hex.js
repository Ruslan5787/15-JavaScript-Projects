const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "f"]
const btn = document.getElementById('btn')
const span = document.querySelector('.color')
const main = document.querySelector('main')

btn.addEventListener('click', e => {
    let hexColor = '#'
    while (hexColor.length <= 6) {
        hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    span.textContent = hexColor
    main.style.backgroundColor = hexColor
})