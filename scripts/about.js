function carregarIdioma() {
    atualizarIdioma(localStorage.getItem("idioma"), "about");
}

carregarIdioma();

engBtn.addEventListener('click', e => {
    e.preventDefault();
    localStorage.setItem("idioma", "eng")
    atualizarIdioma("eng", "about");
})

ptBtn.addEventListener('click', e => {
    e.preventDefault();
    localStorage.setItem("idioma", "pt")
    atualizarIdioma("pt", "about");
})