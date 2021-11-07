const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const span = document.querySelector('.color')
const btn = document.getElementById('btn')
const main = document.querySelector('main')
if(btn) {
    btn.addEventListener('click', e => {
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        span.innerText = randomColor
        main.style.backgroundColor = randomColor
    })
}