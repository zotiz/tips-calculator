const btn = document.querySelector('button')
const tipAmount = document.querySelector('#tipAmount')
const totalBilled = document.querySelector('#totalBilled')
const billAmount = document.querySelector('#billAmount')
const tipPerc = document.querySelector('#tipPerc')

btn.addEventListener('click', () => {
  const tip_amount = (tipPerc.value / 100) * billAmount.value

  tipAmount.value = tip_amount.toFixed(2)
  tipAmount.style.background = 'white'
  totalBilled.value = (Number(billAmount.value) + Number(tip_amount)).toFixed(2)
  totalBilled.style.background = 'white'
  billAmount.style.background = 'rgb(195, 195, 213)'
  tipPerc.style.background = 'rgb(195, 195, 213)'
})
