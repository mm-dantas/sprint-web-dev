document.addEventListener("DOMContentLoaded", function() {
    const boxBarraPesquisa = document.querySelector('.box-barra-pesquisa');
    if (boxBarraPesquisa) {
        boxBarraPesquisa.addEventListener('click', focusInput);
    }

    function focusInput() {
        const barraPesquisa = document.querySelector(".barra-pesquisa");
        if (barraPesquisa) {
            barraPesquisa.focus();
        }
    }

    const showMoreBtn = document.getElementById("showMoreBtn");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", function() {
            const extraContents = document.querySelectorAll(".coluna-info");
            if (extraContents.length > 0) {
                extraContents.forEach(function(extraContent) {
                    if (extraContent.classList.contains("show")) {
                        extraContent.classList.remove("show");
                    } else {
                        extraContent.classList.add("show");
                    }
                });
                
                // Alterna o texto do botão baseado na classe do primeiro elemento
                if (extraContents[0].classList.contains("show")) {
                    this.innerHTML = '<h2 class="text-saiba-mais">Mostrar Menos</h2>';
                } else {
                    this.innerHTML = '<h2 class="text-saiba-mais">Saiba Mais</h2>';
                }
            }
        });
    }
});
