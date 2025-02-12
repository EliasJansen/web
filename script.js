var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'background4.png';
var CanvasXSize = 4000;
var CanvasYSize = 7000;
var speed = 30; // lower is faster
var scale = 1.05;
var y = -4.5; // vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        // image larger than canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // image width larger than canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // image height larger than canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // get canvas context
    ctx = document.getElementById('canvas').getContext('2d');

    // set refresh rate
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // if image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        // reset, start from beginning
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // draw additional image1
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // draw additional image2
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    // image is > Canvas Size
    else {
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // draw aditional image
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    // draw image
    ctx.drawImage(img, x, y,imgW, imgH);
    // amount to move
    x += dx;
}



let menuKnop = document.querySelector(".menu");
			 let navMenu = document.querySelector("nav");
			 let mijnBody = document.querySelector("body")
			 let mainGedeelte = document.querySelector("main");
			 function verbergMenu() {
			 	navMenu.classList.add("onzichtbaar");
			 }
			 mainGedeelte.addEventListener("click",verbergMenu);
			 function toonMenu() {
			 	navMenu.classList.remove("onzichtbaar");
			 }
			 menuKnop.addEventListener("click",toonMenu);


       // tekst

       let atScroll = false;
      let parallaxTitle = document.querySelectorAll(".parallax-title");

      const scrollProgress = () => {
          atScroll = true;
      };

      const raf = () => {
          if (atScroll) {
              parallaxTitle.forEach((element, index) => {
                  element.style.transform = "translateX(" + window.scrollY / 8 + "%)";
              });
              atScroll = false;
          }
          requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
      window.addEventListener("scroll", scrollProgress);



      // cursor


      (function () {

      const link = document.querySelectorAll('nav > .hover-this');
      const cursor = document.querySelector('.cursor');

      const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

})();


// image

s
