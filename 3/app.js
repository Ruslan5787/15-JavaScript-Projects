const reviews = [
    {
        id: 1,
        name: 'Susas Smith',
        job: 'web developer',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum iste odit vitae maxime dolor molestias, alias neque sunt ex, maiores nemo non hic fugit? Quam dolor consequatur fugiat praesentium dolores accusantium libero!',
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'web dedigner',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum iste odit vitae maxime dolor molestias, alias neque sunt ex, maiores nemo non hic fugit? Quam dolor consequatur fugiat praesentium dolores accusantium libero!',
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'intern',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum iste odit vitae maxime dolor molestias, alias neque sunt ex, maiores nemo non hic fugit? Quam dolor consequatur fugiat praesentium dolores accusantium libero!',
    }
]
const img = document.querySelector('#person-img')
const author = document.querySelector('#author')
const job = document.querySelector('#job')

const prevBtn = document.querySelector('.left')
const nextBtn = document.querySelector('.right')
const randomBtn = document.querySelector('.random')

let currentItem = 0

window.addEventListener('DOMContentLoaded', e => {
    showPerson(currentItem)
})
function showPerson(person) {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
}
prevBtn.addEventListener('click', e => {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})
nextBtn.addEventListener('click', e => {
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }    
    showPerson(currentItem)
})
randomBtn.addEventListener('click', e => {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
})