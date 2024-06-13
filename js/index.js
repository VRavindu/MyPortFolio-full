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

// -------------------Nav Bar-------------------

var projectSection = document.getElementById("project");
    var projectSectionOffset = projectSection.offsetTop;

window.addEventListener("scroll", function(){
    var navbar = document.getElementById("navigation");
    if(window.scrollY > projectSectionOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});




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
