let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/aboutme.jpg') {
      myImage.setAttribute('src','images/aboutme2.jpg');
    } else {
      myImage.setAttribute('src','images/aboutme.jpg');
    }
}
