let checkbox = document.getElementById('checkbox')

let titleRight = document.getElementById('title')

let spanDarkMode = document.getElementById('Darkmode')

let button = document.getElementById('button')

let imageGoogle = document.getElementById('image-google')



button.addEventListener('mouseenter', () => {
    imageGoogle.style.transform = 'rotateZ(360deg)'
})

button.addEventListener('mouseout', () => {
    imageGoogle.style.transform = 'rotateZ(0)'
})

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.style.backgroundColor = 'black'
        titleRight.style.color = 'white'
        spanDarkMode.style.color = 'white'
    }
    else {
        document.body.style.backgroundColor = ''
        titleRight.style.color = ''
        spanDarkMode.style.color = ''
    }
})