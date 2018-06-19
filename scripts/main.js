setInterval(1);
function imageScaling(){

    var imageSrc = document
        .getElementById('header')
        .style
        .backgroundImage
        .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];

    // I just broke it up on newlines for readability        

    var image = new Image();
    image.src = imageSrc;

    var width = image.width,
        height = image.height;

    alert('width =' + width + ', height = ' + height);

    if (width/height <= 1.5){
        document.getElementById('header').style.backgroundSize = '100%, auto'
    }

};