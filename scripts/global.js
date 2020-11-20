const engBtn = document.querySelector("#eng");
const ptBtn = document.querySelector("#pt");

function atualizarIdioma(idioma, page) {
    if (idioma == null || idioma == "")
        idioma = "pt";

    document.querySelector("#home").innerHTML = idioma == "pt" ? "Início" : "Home";
    document.querySelector("#about").innerHTML = idioma == "pt" ? "Sobre" : "About";
    document.querySelector("#cast").innerHTML = idioma == "pt" ? "Elenco" : "Cast";
    document.querySelector("#diagram").innerHTML = idioma == "pt" ? "Diagrama" : "Diagram";
    document.querySelector("#contact").innerHTML = idioma == "pt" ? "Contato" : "Contact";
    document.querySelector("#guide").innerHTML = idioma == "pt" ? "Guia" : "Guide";
    document.querySelector("#langSelect").innerHTML = idioma == "pt" ? "Selecionar idioma" : "Select Language";

    document.querySelector('footer div p').innerHTML = idioma == "pt" ? "DISRUPT21 - Desenvolvido por <a href=''>Ambers</a>" : "DISRUPT21 - Developed by <a href=''>Ambers</a>";

    if (page == "about") {
        if (idioma == "pt") {

            document.querySelector('.film-date > p').innerHTML = "<strong>Lançamento: </strong>1985";

            document.querySelector('.film-category > p').innerHTML = "<strong>Categoria: </strong>Ficção Científica, Aventura";

            document.querySelector('.film-sinopse > p').innerHTML = "Marty McFly, um adolescente de uma pequena cidade californiana, é transportado para a década de 1950 quando a experiência do excêntrico cientista Doc Brown dá errado. Viajando no tempo em um carro modificado, Marty conhece versões jovens de seus pais " +
                "e precisa fazer com que eles se apaixonem, ou então ele deixará de existir. Para complicar, Marty precisa voltar para casa a tempo de salvar o cientista.";

            document.querySelector('.film-direction > p').innerHTML = "<p><strong>Direção: </strong>Robert Zemeckis</p>"

            document.querySelector('.film-cast > p').innerHTML = "<strong>Elenco: </strong>Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, Thomas F. Wilson, Claudia Wells"


        } else {

        }

        console.log("about")
    }

}