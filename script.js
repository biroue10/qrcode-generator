const bouton = document.querySelector('button')
const image = document.querySelector('img')
const input = document.querySelector('input')
const telecharger = document.getElementsByClassName('telecharger')
console.log(bouton)
bouton.addEventListener('click',(e)=>{
    e.preventDefault;
    let code = `http://api.qrserver.com/v1/create-qr-code/?data=${input.value}!&size=200x200`
    if(input.value != ''){
        image.src=code
        input.value=""
    }
})
