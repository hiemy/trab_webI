/*------------------------ Menu Mobile ----------------------------*/
const menu_mobile = document.querySelector(".mobile_menu");
console.log(menu_mobile)
const navMenu = document.querySelector(".nav-menu");

menu_mobile.addEventListener("click", () => {
    menu_mobile.classList.toggle('active');
    navMenu.classList.toggle('active');
})

/*----------------- Aumentar e diminuir letra ----------------------*/
window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
};

/*------------------------- Alterar idioma ----------------------------*/
//Port
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".nav-menu").children().eq(0).text("Soluções");
        $(".nav-menu").children().eq(1).text("Comunidade");
        $(".nav-menu").children().eq(2).text("Comprar");
        $(".nav-menu").children().eq(3).text("Entrar");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //seção
        $("#title").text("Uma Webpage simples com opção de Milti-language");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluções");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visão Geral");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagamentos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Suporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ajuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Termos e Políticas");
    });
});

//Ing
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("Solutions");
        $(".nav-menu").children().eq(1).text("community");
        $(".nav-menu").children().eq(2).text("Buy");
        $(".nav-menu").children().eq(3).text("Log in");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("A simple webpage with Milti-language option");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});