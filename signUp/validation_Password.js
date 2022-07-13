let firstPassword = document.getElementById('fpass')

let secondPassword = document.getElementById('spass')

let emailUser = document.getElementById('email')

let startButton = document.getElementById('signup')


let valid = false


startButton.addEventListener('click', () => {
    valid = false
    if (!firstPassword.value || !secondPassword.value || !emailUser.value) {
        window.alert('Preencha os campos abaixo!')
    }
    else if (emailUser.value.indexOf('@') == -1 || emailUser.value.indexOf('.com') == -1) {
        window.alert('Insira um email válido')
    }
    else if (firstPassword.value.length < 8) {
        window.alert('Insira uma senha com 8 caracteres no mínimo')
    }
    else if (secondPassword.value === firstPassword.value) {
        window.alert(`Olá, seu cadastro foi realizado com sucesso. Vamos validar suas informações isso pode demorar um pouco.`);
        valid = true
    }
    else {
        valid = false
        secondPassword.style.border = '0.5px solid red'
        window.alert('Senhas não coincidem.')
        secondPassword.focus()
    }
})


function submitForm(event){
    if (valid === false) {
        event.preventDefault();
    }
    else {
        window.history.back();
    }
}
