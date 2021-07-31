const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
let nota1 = document.querySelector('#nota1');
let nota2 = document.querySelector('#nota2');
let nota3 = document.querySelector('#nota3');
let nota4 = document.querySelector('#nota4');
let nota5 = document.querySelector('#nota5');
const enviar = document.querySelector('#enviar');
const result = document.querySelector('#p-result');

enviar.addEventListener('click', promedio);

function promedio(){
    nota1=parseFloat(nota1.value);
    nota2=parseFloat(nota2.value);
    nota3=parseFloat(nota3.value);
    nota4=parseFloat(nota4.value);
    nota5=parseFloat(nota5.value);

    if((nota1 <= 5)||(nota1 >= 1 ),(nota2 <= 5)||(nota2 >= 1 ),(nota3 <= 5)||(nota3 >= 1 ),(nota4 <= 5)||(nota4 >= 1 ),(nota5 <= 5)||(nota5 >= 1 )){

        nota1 = nota1 * 0.10;
        nota2 = nota2 * 0.10;
        nota3 = nota3 * 0.15;
        nota4 = nota4 * 0.20;
        nota5 = nota5 * 0.45;

        var promedio = nota1 + nota2 + nota3 +nota4 +nota5
        
        if(promedio >3.5){
            result.textContent= 'Señor(a) '+nombre.value+' Su promedio es: '+ promedio + " usted aprobo";
        }
        else{
            result.textContent= 'Señor(a) '+nombre.value+' Su promedio es: '+ promedio + "  usted reprobo";
        }
        
    }else{
        result.textContent= 'Nota mal';
    }
}