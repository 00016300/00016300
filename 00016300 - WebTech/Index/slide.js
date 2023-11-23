// NEXT BANNER IMAGE FUNCTION
let currentImageIndex = 0;
const images = [document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3')];

function showImage(index) {
    // Hide all images
    images.forEach(image => {
        image.style.display = 'none';
    });

    // Show the image at the given index
    images[index].style.display = 'block';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}


document.getElementById('languageSwitch').addEventListener('click', function() {
    var langText = document.getElementById('langText');
    var langImage = document.getElementById('langImage');

    if (langText.textContent === "Lang") {
        langText.textContent = "Язык";
        langImage.src = "../Materials/russia.png"; // Replace with the path to your Russian flag image
    } else {
        langText.textContent = "Lang";
        langImage.src = "../Materials/usa.png";
    }
});

document.getElementsByClassName('hamburger-menu')[0].addEventListener('click', function() {
        var expandedMenu = document.getElementsByClassName('expanded-menu')[0];
        expandedMenu.style.display = expandedMenu.style.display === 'block' ? 'none' : 'block';
});


