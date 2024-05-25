document.addEventListener("DOMContentLoaded", function() {
const boxBarraPesquisa = document.querySelector('.box-barra-pesquisa');
boxBarraPesquisa.addEventListener('click', focusInput);
})

function focusInput() {
    document.querySelector(".barra-pesquisa").focus();
}
