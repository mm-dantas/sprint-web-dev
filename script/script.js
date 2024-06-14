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

    let count = 1;
    document.getElementById("radio1").checked = true;

    setInterval( function(){
        nextImage();
    }, 5000)

    function nextImage(){
        count++;
        if(count>4){
            count = 1;
        }

        document.getElementById("radio"+count).checked = true;

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
                
                
                if (extraContents[0].classList.contains("show")) {
                    this.innerHTML = '<h2 class="text-saiba-mais">Mostrar Menos</h2>';
                } else {
                    this.innerHTML = '<h2 class="text-saiba-mais">Saiba Mais</h2>';
                }
            }
        });
    }
});
