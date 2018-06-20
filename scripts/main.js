let imageZoom1 = document.getElementById('entry1');
let imageZoom2 = document.getElementById('entry2');

let img1 = document.getElementById('img1');
let zoomContent1 = document.getElementById('img01');

let img2 = document.getElementById('img2');
let zoomContent2 = document.getElementById('img02');

img1.onclick = function() {
    imageZoom1.style.display = "block";
    zoomContent1.src = this.src;
};

imageZoom1.onclick = function() {
    imageZoom1.classList.add('fadeaway');
    imageZoom1.addEventListener("animationend", listener, false);

};

img2.onclick = function() {
    imageZoom2.style.display = "block";
    zoomContent2.src = this.src;
};

imageZoom2.onclick = function() {
    imageZoom2.classList.add('fadeaway');
    imageZoom2.addEventListener("animationend", listener, false);

};

function listener(event) {
    if (event.type === "animationend"){
        imageZoom1.style.display = "none";
        imageZoom1.classList.remove('fadeaway');
        imageZoom1.removeEventListener("animationend", listener, false);
        imageZoom2.style.display = "none";
        imageZoom2.classList.remove('fadeaway');
        imageZoom2.removeEventListener("animationend", listener, false);
    }
}

let blog = document.getElementById('blog');
let about = document.getElementById('about');

let navBlog = document.getElementById('navblog');
let navAbout = document.getElementById('navabout');
let navProjects = document.getElementById('navprojects');

navProjects.onclick = function(){
    navProjects.className = "active";
    navBlog.classList.remove("active");
    navAbout.classList.remove("active");
};

var nav = 0;

navBlog.onclick = function(){
    navBlog.className = "active";
    navAbout.classList.remove("active");
    navProjects.classList.remove("active");
    about.classList.add('fadeaway');
    about.addEventListener("animationend", abouteventlistener, false);
};
navAbout.onclick = function(){
    navAbout.className = "active";
    navBlog.classList.remove("active");
    navProjects.classList.remove("active");
    blog.classList.add('fadeaway');
    blog.addEventListener("animationend", blogeventlistener, false);
};

function blogeventlistener(event) {
    if (event.type === "animationend"){
        switch(nav) {
            case 0:
                blog.style.display = "none";
                blog.classList.remove('fadeaway');
                about.style.display = "block";
                about.classList.add('fadein');
                about.addEventListener("animationend", abouteventlistener, false);
                blog.removeEventListener("animationend", blogeventlistener, false);
                break;
            case 1:
                blog.classList.remove('fadein');
                blog.removeEventListener("animationend", blogeventlistener, false);
                nav =  0;
                break;
        }
    }
}
function abouteventlistener(event) {
    if (event.type === "animationend"){
        switch (nav) {
            case 0:
                about.classList.remove('fadein');
                about.removeEventListener("animationend", abouteventlistener, false);
                nav = 1;
                break;
            case 1:
                about.style.display = "none";
                about.classList.remove('fadeaway');
                blog.style.display = "block";
                blog.classList.add('fadein');
                blog.addEventListener("animationend", blogeventlistener, false);
                about.removeEventListener("animationend", abouteventlistener, false);
                break;
        }
    }
}