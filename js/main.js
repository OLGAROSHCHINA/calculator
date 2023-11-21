const display = document.querySelector('.display')


const btnsCalculate = document.querySelectorAll('.js-btn-calculate')
const btns = document.querySelectorAll('.js-btn')

btns.forEach((item) => {
    item.addEventListener('click', (event) => {
        let itemText = event.target.textContent
        if (itemText === "x") {
            itemText = "*"
        }

        if (itemText === "÷") {
            itemText = "/"
        }


        if (itemText === "AC") {
            display.value = ""
        }

        if (itemText === "C") {
            display.value = display.value.slice(0, -1)
        }

        if (itemText !== "C" && itemText !== "AC" && itemText !== "=") {
            display.value += itemText

        }

        if (itemText === "=") {
            display.value = eval(display.value)
        }
    })
})


const save = document.querySelector('.btn-save')
save.addEventListener('click', (e) => {
    const list1 = document.querySelector('.list1')
    const taskText = display.value
    display.value = ""
    const list = `<li>${taskText}</li>`

    list1.insertAdjacentHTML('beforeend', list)



    list1.childNodes.forEach((item) => {
        item.addEventListener('click', (event) => {
            display.value = event.target.textContent
            item.remove()
        })
    })
})
