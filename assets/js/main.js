const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



function verifyPassword() {
    const password = $('input[name="password').value
    const passConfirm = $('input[name="passsword-confirm"]').value
    const passMes = $('.password-mes')
    const passConfirmMes = $('.password-confirm-mes')

    passMes.innerHTML = ''
    passConfirmMes.innerHTML = ''
    if (password=='') {
        passMes.innerHTML = 'Please enter your password'
        return false
    } else if (password.length < 8) {
        passMes.innerHTML = 'Password must be at least 8 characters'
        return false
    }
    if (passConfirm !== password) {
        passConfirmMes.innerHTML = '*Password does not match'
        return false
    }
}