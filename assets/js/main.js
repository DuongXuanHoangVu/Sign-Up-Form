const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const firstName = $('input[name="first-name')
firstName.focus()


function verify() {
    // Verify Password
    const password = $('input[name="password').value
    const passConfirm = $('input[name="passsword-confirm"]').value
    const passMes = $('.password-mes')
    const passConfirmMes = $('.password-confirm-mes')

    passMes.innerHTML = ''
    passConfirmMes.innerHTML = ''
    if (password=='') {
        passMes.innerHTML = '*Please enter your password'
        // return false
    } else if (password.length < 8) {
        passMes.innerHTML = '*Password must be at least 8 characters'
        // return false
    }
    if (passConfirm !== password) {
        passConfirmMes.innerHTML = '*Password does not match'
        // return false
    }

    // Verify Name
    const firstName = $('input[name="first-name').value
    const lastName = $('input[name="last-name"]').value
    const firstNameMes = $('.first-name-mes')
    const lastNameMes = $('.last-name-mes')
    const nameRegex = /^[a-zA-Z ]+$/
    firstNameMes.innerHTML = ''
    lastNameMes.innerHTML =''
    if (firstName == '') {
        firstNameMes.innerHTML = '*Please enter your First Name'
        // return false
    } else if (!firstName.match(nameRegex)) {
        firstNameMes.innerHTML = '*Name must be letters'
        // return false
    }
    if (lastName == '') {
        lastNameMes.innerHTML = '*Please enter your Last Name'
        // return false
    } else if (!lastName.match(nameRegex)) {
        lastNameMes.innerHTML = '*Name must be letters'
        // return false
    }

    // Verify Email
    const email = $('input[name="email"]').value
    const emailMes = $('.email-mes')
    emailMes.innerHTML = ''
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email == '') {
        emailMes.innerHTML = '*Please enter your Email'
        // return false
    } else if (!email.match(emailRegex)) {
        emailMes.innerHTML = '*Email invalidate'
        // return false
    }

    // Verify Phone Number
    const phone = $('input[name="phone"]').value
    const phoneMes = $('.phone-mes')
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    phoneMes.innerHTML = ''
    if (phone == '') {
        phoneMes.innerHTML = '*Please enter your Phone Number'
    } else if (phone.match(phoneRegex)) {
        phoneMes.innerHTML = '*Phone Number invalidate'
    }
}