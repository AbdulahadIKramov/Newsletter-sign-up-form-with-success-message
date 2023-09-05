const button = document.querySelector('.button')
const input = document.querySelector('#address')
const emailRequired = document.querySelector('.email-required')
const container = document.querySelector('.container')
const contentSacces = document.querySelector('.content-sacces')
const emailConfig = document.querySelector('.email-config')
const subBtn = document.querySelector('#sub-btn')

button.addEventListener('click', () => {
    const inputValue = input.value
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const inputEmail = inputValue.match(validRegex)
    console.log(inputEmail);

    if(inputEmail === null) {
        emailRequired.style.display = 'block'
        contentSacces.style.display = 'none'
        container.style.display = 'flex'
    }else {
        emailRequired.style.display = 'none'
        contentSacces.style.display = 'block'
        container.style.display = 'none'
        input.value = ''
    }
    emailConfig.innerHTML = `A confirmation email has been sent to <b> ${inputEmail} </b> Please open it and click the button inside to confirm your subscription.`
})

subBtn.addEventListener('click', () => {
    contentSacces.style.display = 'none'
    container.style.display = 'flex'
}) 





