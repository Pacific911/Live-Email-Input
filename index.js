const emailInput = document.querySelector('#email')


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

emailInput.addEventListener('keyup', (e) => {
    console.log(e.target.value)

    if (emailRegex.test(e.target.value)){
        emailInput.parentElement.classList.add('valid')
    } else {
        emailInput.parentElement.classList.remove('valid')
    }
})