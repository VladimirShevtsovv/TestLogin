(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('button')
        const loader = document.querySelector('.lds-dual-ring')
        const successfulPage = document.querySelector('.successful-register')
        const loginContainer = document.querySelector('.isLogin')
        const allInputs = document.querySelectorAll('.form__input')
        const allChoicesContainer = document.querySelectorAll('.containerWithChoicesValue')
        const dateError = document.getElementById('dateError');
        const nationalityError = document.getElementById('nationalityError');
        const allCheckBoxes = document.querySelectorAll('.checkBox')
        const checkBoxError = document.querySelector('#genderError')

        const passwordInput = document.querySelector('#input__password')
        const confirmPasswordInput = document.querySelector('#input__passwordConfirm')

        let countCheckBoxCLick = 0;


        allCheckBoxes.forEach(item => {
            item.addEventListener('click', function () {
                countCheckBoxCLick += 1
                checkBoxError.classList.remove('errors-visible')
            })
        })

        button.addEventListener('click', async function () {
            for (let i = 0; i < allInputs.length; i++) {
                if (!allInputs[i].value) {
                    if (allInputs[i].id.includes('email')) {
                        allInputs[i].previousElementSibling.textContent = 'incorrect email'
                    } else {
                        allInputs[i].previousElementSibling.textContent = 'required field'
                        if (allInputs[i].id === 'input__password') {
                            allInputs[i].previousElementSibling.textContent = 'incorrect password'
                        }
                        if (allInputs[i].id === 'input__passwordConfirm') {
                            allInputs[i].previousElementSibling.textContent = 'not confirmed'
                        }

                    }
                    allInputs[i].style.borderBottom = '1px solid #FF2222'
                    allInputs[i].previousElementSibling.classList.add('errors-visible')


                } else {
                    if (allInputs[i].id.includes('email')) {
                        const emailValue = allInputs[i].value
                        if (!(emailValue.endsWith('.by') ||
                            emailValue.endsWith('.uk') ||
                            emailValue.endsWith('.ru') ||
                            emailValue.endsWith('.com')) || !(emailValue.includes('@') && emailValue.indexOf() !== 0)) {
                            allInputs[i].previousElementSibling.classList.add('errors-visible')
                            allInputs[i].previousElementSibling.textContent = 'incorrect email'
                            allInputs[i].style.borderBottom = '1px solid #FF2222'
                        }
                    }
                    if (allInputs[i].id === 'input__password') {
                        const passwordValue = allInputs[i].value
                        const objWithSymbolCount = {
                            lowerCase: 0,
                            upperCase: 0,
                            num: 0
                        }
                        let arrayFromStr = passwordValue.split('')
                        for (let j = 0; j < arrayFromStr.length; j++) {
                            if (!isNaN(Number(arrayFromStr[j]))) {
                                objWithSymbolCount.num += 1
                            } else {
                                if (arrayFromStr[j] === arrayFromStr[j].toUpperCase()) {
                                    objWithSymbolCount.upperCase += 1
                                } else {
                                    objWithSymbolCount.lowerCase += 1
                                }
                            }
                        }
                        if (passwordValue.length < 8) {
                            allInputs[i].previousElementSibling.textContent = 'very short'
                            allInputs[i].previousElementSibling.classList.add('errors-visible')
                            allInputs[i].style.borderBottom = '1px solid #FF2222'
                        } else {
                            if (objWithSymbolCount.lowerCase === 0 || objWithSymbolCount.upperCase === 0 || objWithSymbolCount.num === 0) {
                                allInputs[i].previousElementSibling.textContent = 'incorrect password'
                                allInputs[i].previousElementSibling.classList.add('errors-visible')
                                allInputs[i].style.borderBottom = '1px solid #FF2222'
                            }
                        }
                    }
                    if (allInputs[i].id === 'input__passwordConfirm') {
                        if (passwordInput.value !== confirmPasswordInput.value) {
                            allInputs[i].previousElementSibling.textContent = 'not confirmed'
                            allInputs[i].previousElementSibling.classList.add('errors-visible')
                            allInputs[i].style.borderBottom = '1px solid #FF2222'
                        }


                    }


                }
            }

            for (let i = 0; i < allChoicesContainer.length; i++) {
                if (!allChoicesContainer[i].textContent) {

                    allChoicesContainer[i].style.borderBottom = '1px solid #FF2222'
                    if (allChoicesContainer[i].id.includes('date') && !allChoicesContainer[i].id.includes('Nationality')) {

                        dateError.classList.add('errors-visible')
                    }
                    if (allChoicesContainer[i].id.includes('Nationality')) {
                        nationalityError.classList.add('errors-visible')
                    }
                }
            }

            if (countCheckBoxCLick === 0) {
                checkBoxError.textContent = 'choose something'
                checkBoxError.classList.add('errors-visible')
            }

            const allErrorsVisible = document.querySelectorAll('.errors-visible')
            console.log(allErrorsVisible)
            if (allErrorsVisible.length === 0) {
                const randomNumber = Math.round(Math.random())
                loader.style.display = 'inline-block'
                button.style.color = '#5A61ED'
                button.setAttribute('disabled', 'disabled')
                if (randomNumber === 1) {
                    const request = await fetch('http://localhost:3000/error', {
                        method: 'GET',
                    })
                    console.log(await request.json())
                    button.classList.add('button__error')
                    setTimeout(() => {
                        button.classList.remove('button__error')
                    }, 2200)
                    loader.style.display = 'none'
                    button.style.color = 'white'
                    button.removeAttribute('disabled')
                } else {
                    const request = await fetch('http://localhost:3004/ok', {
                        method: 'GET',
                    })
                    console.log(await request.json())

                    allInputs.forEach(item=>{
                        item.value === ''
                    })

                    allChoicesContainer.forEach(item=>{
                        item.textContent===''
                    })

                    loader.style.display = 'none'
                    button.style.color = 'white'
                    button.removeAttribute('disabled')
                    successfulPage.style.transform = 'translateY(0)'
                    loginContainer.style.zIndex = '350'
                }
            }


        })

        allInputs.forEach(item => {
            item.addEventListener('input', function () {
                if (item.value !== '') {
                    if (item.id.includes('email')) {
                        const emailValue = item.value
                        if (emailValue.endsWith('.by') ||
                            emailValue.endsWith('.uk') ||
                            emailValue.endsWith('.ru') ||
                            emailValue.endsWith('.com') && emailValue.includes('@') && emailValue.indexOf() !== 0) {
                            item.previousElementSibling.classList.remove('errors-visible')
                            item.style.borderBottom = '1px solid #42bd25'
                        }
                    } else {
                        item.previousElementSibling.classList.remove('errors-visible')
                        item.style.borderBottom = '1px solid #42bd25'
                        if (item.id === 'input__password') {
                            const passwordValue = item.value
                            const objWithSymbolCount = {
                                lowerCase: 0,
                                upperCase: 0,
                                num: 0
                            }
                            let arrayFromStr = passwordValue.split('')
                            for (let j = 0; j < arrayFromStr.length; j++) {
                                if (!isNaN(Number(arrayFromStr[j]))) {
                                    objWithSymbolCount.num += 1
                                } else {
                                    if (arrayFromStr[j] === arrayFromStr[j].toUpperCase()) {
                                        objWithSymbolCount.upperCase += 1
                                    } else {
                                        objWithSymbolCount.lowerCase += 1
                                    }
                                }
                            }
                            if (passwordValue.length < 8) {
                                item.previousElementSibling.textContent = 'incorrect password'
                                item.previousElementSibling.classList.add('errors-visible')
                                item.style.borderBottom = '1px solid #FF2222'
                            } else {
                                if (objWithSymbolCount.lowerCase === 0 || objWithSymbolCount.upperCase === 0 || objWithSymbolCount.num === 0) {
                                    item.previousElementSibling.textContent = 'incorrect password'
                                    item.previousElementSibling.classList.add('errors-visible')
                                    item.style.borderBottom = '1px solid #FF2222'
                                } else {
                                    item.previousElementSibling.classList.remove('errors-visible')
                                    item.style.borderBottom = '1px solid #42bd25'
                                }
                            }
                        }
                        if (item.id === 'input__passwordConfirm') {
                                if (passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value !== '') {
                                    item.style.borderBottom = '1px solid #42bd25'
                                    item.previousElementSibling.classList.remove('errors-visible')
                                }else{
                                    item.previousElementSibling.textContent = 'not confirmed'
                                    item.style.borderBottom = '1px solid #FF2222'
                                    item.previousElementSibling.classList.add('errors-visible')
                                }

                        }


                    }
                } else {
                    if (item.id.includes('email')) {
                        item.previousElementSibling.textContent = 'incorrect email'
                    } else {
                        item.previousElementSibling.textContent = 'required field'
                        if (item.id === 'input__password') {
                            item.previousElementSibling.textContent = 'incorrect password'
                        }
                        if (item.id === 'input__passwordConfirm') {
                            item.previousElementSibling.textContent = 'not confirmed'
                        }
                    }
                    item.previousElementSibling.classList.add('errors-visible')
                    item.style.borderBottom = '1px solid #FF2222'
                }


            })
        })

        const allRows = document.querySelectorAll('.form__row')

        for (let i = 0; i < allRows.length - 1; i++) {
            setTimeout(() => {
                allRows[i].style.transform = 'translateY(0px)'
                allRows[i].style.opacity = '1'
            }, i * 300)

        }


    })


})()