const color = document .querySelector('#input_color')
const cambiar_color = document.querySelector('#button_color')
const title = document.querySelector('#h2_color')

cambiar_color.addEventListener('change',recibirColor)

function recibirColor(){
    
    title.style.backgroundColor = color.value
    
}
