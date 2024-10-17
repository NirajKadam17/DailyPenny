const expenseForm = document.getElementById('expense-form')
const expenseName = document.getElementById('expense-name')
const expenseAmount = document.getElementById('expense-amount')
const AddExpenseBtn = document.querySelector('button')
const expenseUL = document.getElementById('expense-list')
const totalAmount = document.getElementById('total-amount')

let expenseArray = []
let num = 0;

expenseForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const expenseNameValue = expenseName.value.trim()
    const expenseAmountValue = parseFloat(expenseAmount.value.trim())
    
    const result = {id:num+=1,
                    name:expenseNameValue,
                    price:expenseAmountValue
                    }
    expenseArray.push(result)
    console.log(expenseArray)
    render()
    
    
})

function render(){
    expenseName.value = ""
    expenseAmount.value = ""
    expenseUL.innerHTML = ''
    let total = 0
expenseArray.forEach(element => {
    const expenseList = document.createElement('li')
    total = total + element.price
    expenseList.innerHTML = `The ${element.name} of price ${element.price} is purchased <button data-id = ${element.id}>Delete</button>`
    expenseUL.appendChild(expenseList)
    
    })
}

expenseUL.addEventListener('click',(event)=>{
    if(event.target.tagName == 'BUTTON'){
        const deleteBtnId = parseInt(event.target.getAttribute('data-id'))
        expenseArray =  expenseArray.filter(p=>p.id !== deleteBtnId)
       console.log(expenseArray)
       render()
       
    }
})


