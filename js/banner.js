  var num =0;
  var i = 0;
  var images = [];
  var time = 4000;

  // Image list
  images[0] = './images/img.jpg';
  images[1] = './images/img1.jpg';
  

  // Change image
  function changeImage(){

    document.slide.src = images[i];

    if(i <images.length - 1){
      i++;
    } else {
      i = 0;
    }
    setTimeout("changeImage()", time);
  }

  window.onload = changeImage;
  function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
      num = 0;
    }
    slider.src = images[num];
  }

  function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
      num = images.length-1;
    }
    slider.src = images[num];
  }

