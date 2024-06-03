// function showImage(id) {
//     document.getElementById(id).style.display = "block";
//     document.getElementById(id).style.transition = "10s";
// }

// function hideImage(id) {
//     document.getElementById(id).style.display = "none";
// }

// -------------------Background Animation-------------------

const bgAnimation = document.getElementById('bgAnimation');

const numOfColorBox = 400;

for (let i = 0; i < numOfColorBox; i++) {
    const colorBox = document.createElement('div');

    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
    
}


// -------------------Project Image-------------------

function showImage(id) {
    var image = document.getElementById(id);
    image.classList.remove('hide');
    image.classList.add('show');
}

function hideImage(id) {
    var image = document.getElementById(id);
    image.classList.remove('show');
    image.classList.add('hide');
}
