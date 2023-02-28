const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btn = document.querySelector('#btn');
const paragrafo = document.querySelector('#paragrafo');

function limpaInput() {
    peso.value = '';
    altura.value = '';
}
const imc = () => {
    const valorPeso = +peso.value.replace(',', '.');
    const valorAltura = +altura.value.replace(',', '.');
    let resultado = 0;
    if ( peso.value === '' || altura.value === '') {
        paragrafo.innerHTML = 'Preencha todos os campos.';
    }
  
    if (typeof valorPeso === 'number' && typeof valorAltura === 'number'){
    resultado = (valorPeso / (valorAltura ** 2)).toFixed(2)
    paragrafo.innerHTML = `Seu IMC é ${resultado}`;
    };
   
};
btn.addEventListener('click', () => {
    imc();
    limpaInput();
});