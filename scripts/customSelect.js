(function () {
    document.addEventListener('DOMContentLoaded', function () {

        const dateError = document.getElementById('dateError');
        const nationalityError = document.getElementById('nationalityError');

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const Nationality = ['American', 'Armenian', 'Belgian', 'Canadian', 'Danish']


        const dateChoicesDayList = document.getElementById('dateChoicesDayList')
        const choicesDateDay = document.getElementById('dateChoicesDay')
        const arrowDownDays = document.getElementById('dateDaysArrow')


        for (let i = 1; i < 32; i++) {
            const containerWithDay = document.createElement('li')
            containerWithDay.classList.add('dateDaysList-item')
            containerWithDay.innerHTML = `${i}`
            containerWithDay.addEventListener('click', function (e) {
                choicesDateDay.innerHTML = containerWithDay.textContent
                dateChoicesDayList.classList.remove('visibleSelect')
                arrowDownDays.classList.remove('rotateImg')

                choicesDateDay.style.borderBottom = '1px solid #42bd25'


                if (choicesDateDay.textContent && choicesDateMonth.textContent && choicesDateYears.textContent) {
                    dateError.style.color = 'white'


                }

            })
            dateChoicesDayList.append(containerWithDay)
        }

        choicesDateDay.addEventListener('click', function (e) {
            dateChoicesDayList.classList.toggle('visibleSelect')
            arrowDownDays.classList.toggle('rotateImg')
        })

        const dateChoicesMonthList = document.getElementById('dateChoicesMonthList')
        const choicesDateMonth = document.getElementById('dateChoicesDateMonth')
        const arrowDownMonth = document.getElementById('dateMonthArrow')


        choicesDateMonth.addEventListener('click', function (e) {
            dateChoicesMonthList.classList.toggle('visibleSelect')
            arrowDownMonth.classList.toggle('rotateImg')
        })


        for (let i = 0; i < months.length; i++) {
            const containerWithMonth = document.createElement('li')
            containerWithMonth.classList.add('dateDaysList-item')
            containerWithMonth.innerHTML = `${months[i]}`
            containerWithMonth.addEventListener('click', function (e) {
                choicesDateMonth.innerHTML = containerWithMonth.textContent
                dateChoicesMonthList.classList.remove('visibleSelect')
                arrowDownMonth.classList.remove('rotateImg')

                choicesDateMonth.style.borderBottom = '1px solid #42bd25'

                if (choicesDateDay.textContent && choicesDateMonth.textContent && choicesDateYears.textContent) {
                    dateError.style.color = 'white'
                    dateError.classList.remove('errors-visible')
                }

            })
            dateChoicesMonthList.append(containerWithMonth)
        }

        const dateChoicesYearsList = document.getElementById('dateChoicesYearsList')
        const choicesDateYears = document.getElementById('dateChoicesDateYears')
        const arrowDownYears = document.getElementById('dateYearsArrow')

        choicesDateYears.addEventListener('click', function (e) {
            dateChoicesYearsList.classList.toggle('visibleSelect')
            arrowDownYears.classList.toggle('rotateImg')
        })


        for (let i = 0; i < 31; i++) {
            const containerWithDay = document.createElement('li')
            containerWithDay.classList.add('dateDaysList-item')
            containerWithDay.innerHTML = 1995 + i
            containerWithDay.addEventListener('click', function (e) {
                choicesDateYears.innerHTML = containerWithDay.textContent
                dateChoicesYearsList.classList.remove('visibleSelect')
                arrowDownYears.classList.remove('rotateImg')

                choicesDateYears.style.borderBottom = '1px solid #42bd25'

                if (choicesDateDay.textContent && choicesDateMonth.textContent && choicesDateYears.textContent) {
                    dateError.style.color = 'white'
                    dateError.classList.remove('errors-visible')
                }
            })
            dateChoicesYearsList.append(containerWithDay)
        }


        const dateChoicesNationalityList = document.getElementById('dateChoicesNationalityList')
        const choicesDateNationality = document.getElementById('dateChoicesDateNationality')
        const arrowDownNationality = document.getElementById('dateNationalityArrow')

        choicesDateNationality.addEventListener('click', function (e) {
            dateChoicesNationalityList.classList.toggle('visibleSelect')
            arrowDownNationality.classList.toggle('rotateImg')
        })


        for (let i = 0; i < Nationality.length; i++) {
            const containerWithNationality = document.createElement('li')
            containerWithNationality.classList.add('dateDaysList-item')
            containerWithNationality.innerHTML = `${Nationality[i]}`
            containerWithNationality.addEventListener('click', function (e) {
                choicesDateNationality.innerHTML = containerWithNationality.textContent
                dateChoicesNationalityList.classList.remove('visibleSelect')
                arrowDownNationality.classList.remove('rotateImg')


                choicesDateNationality.style.borderBottom = '1px solid #42bd25'
                nationalityError.style.color = 'white'


            })
            dateChoicesNationalityList.append(containerWithNationality)
        }


        document.addEventListener('click', function (e) {
            if (!e.target.id.includes('dateChoicesDateNationality')) {
                dateChoicesNationalityList.classList.remove('visibleSelect')
                arrowDownNationality.classList.remove('rotateImg')
            }
            if (!e.target.id.includes('List') && !e.target.id.includes('date')) {
                dateChoicesNationalityList.classList.remove('visibleSelect')
                arrowDownNationality.classList.remove('rotateImg')

                dateChoicesYearsList.classList.remove('visibleSelect')
                arrowDownYears.classList.remove('rotateImg')

                dateChoicesMonthList.classList.remove('visibleSelect')
                arrowDownMonth.classList.remove('rotateImg')

                dateChoicesDayList.classList.remove('visibleSelect')
                arrowDownDays.classList.remove('rotateImg')
            }
            if (e.target.id.includes('dateChoicesDateNationality')) {
                dateChoicesYearsList.classList.remove('visibleSelect')
                arrowDownYears.classList.remove('rotateImg')

                dateChoicesMonthList.classList.remove('visibleSelect')
                arrowDownMonth.classList.remove('rotateImg')

                dateChoicesDayList.classList.remove('visibleSelect')
                arrowDownDays.classList.remove('rotateImg')
            }

        })

        const button = document.getElementById('button')


    })


})()