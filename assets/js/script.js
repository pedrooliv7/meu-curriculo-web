const titulo = document.querySelector("h1");

if (titulo) {
    titulo.addEventListener("mouseover", function(){
        titulo.style.color = "#a855f7";
        titulo.style.transform = "scale(1.05)";
        titulo.style.transition = "0.3s";
    });

    titulo.addEventListener("mouseout", function(){
        titulo.style.color = "white";
        titulo.style.transform = "scale(1)";
    });
}


const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const formData = new FormData(form);

        fetch("contato.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {

            alert("Mensagem enviada com sucesso!");

            form.reset();

        })
        .catch(error => {
            alert("Erro ao enviar mensagem.");
            console.log(error);
        });
    });
}
const secoes = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
        }
    });
}, {
    threshold: 0.2
});

secoes.forEach(function (secao) {
    observer.observe(secao);
});