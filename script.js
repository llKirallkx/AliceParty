// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function changeBackgroundColor() {
//     document.body.style.backgroundColor = getRandomColor();
// }

// setInterval(changeBackgroundColor, 1000);
// Obtém o elemento do iframe
var iframe = document.getElementById("google-form");

// Aguarda o carregamento do iframe
iframe.onload = function() {
    // Define a altura do iframe com base na altura do conteúdo do formulário
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
};
