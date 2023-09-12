function slider(imagePath) {
    // Obtém a imagem maior com base no caminho fornecido
    var homeImage = document.querySelector('.home-img img');
    homeImage.src = 'img/' + imagePath;
}