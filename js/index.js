// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";
//
// jQuery(function() {
//   jQuery("body").css("color", "blue");
// });

const prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    items = document.querySelectorAll(".item"),
    dots = document.querySelectorAll(".dot"),
    itemWrapper = document.querySelectorAll(".carousel-inner");

let index = 2;

const activeSlide = n => {
    for (item of items) {
        item.classList.remove("active");
    }
    items[n].classList.add("active");
}

const nextSlide = () => {
    if (index === items.length - 1) {
        index = 0;
    } else {
        index++;
    }
    activeSlide(index);
    activeItem(index);
}

const prevSlide = () => {
    if (index === 0) {
        index = items.length - 1;
    } else {
        index--;
    }
    activeSlide(index);
    activeItem(index);
}
const activeItem = n => {
    for (item of dots) {
        item.classList.remove("active");
    }
    dots[n].classList.add("active");
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        activeSlide(index);
        activeItem(index);
    })
})

let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__burger.classList.remove('active');
    header__menu.classList.remove('active');
    back.classList.remove('lock');
}

let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let body = document.querySelector("body");

if (isMobile.any()) {
    body.classList.add("touch");
    let arrow = document.querySelectorAll(".menu__arrow");
    for (let i = 0; i < arrow.length; i++) {
        let arrow2 = arrow[i].querySelectorAll(".arrow");
        let thisLink = arrow2[i].previousElementSibling;
        let subMenu = arrow2[i].nextElementSibling;
        let thisArrow = arrow2[i];

        thisLink.classList.add("parent");
        arrow[i].addEventListener("click", function (e) {
            // e.preventDefault();
            e.stopPropagation()
            subMenu.classList.toggle("open");
            thisArrow.classList.toggle("active");
        });
    }
} else {
    body.classList.add("mouse");
}


