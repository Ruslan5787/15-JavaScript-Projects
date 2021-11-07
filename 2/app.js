let count = 0
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', e => {
        const styles = e.target.classList
        if (styles.contains('minus')) {
            count--
        } else if (styles.contains('plus')) {
            count++
        } else {
            count = 0
        }
        if(count < 0) {
            value.style.color = 'red'
        } else if (count > 0) {
            value.style.color = 'green'
        } else {
            value.style.color = 'black'
        }
        value.textContent = count
    })
})
