const peso = parseFloat(document.querySelector('#peso').value);
const altura = parseFloat(document.querySelector('#altura').value);
const btn = document.querySelector('#btn');
const paragrafo = document.querySelector('#paragrafo');


const imc = () => {
    let resultado = 0;
    if ( typeof peso !== 'number' || typeof altura !== 'number' ) {
        paragrafo.innerHTML = 'Digite valores numéricos.'
    }
    if (typeof peso === 'number' && typeof altura === 'number'){
    resultado = peso / (altura ** 2);
    paragrafo.innerHTML = `Seu IMC é ${resultado}`;
    };
};
btn.addEventListener('click', imc);