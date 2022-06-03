window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);
})

var i=0;
        var image=document.getElementById("bar");
        // Добавьте свои картинки в массив через запятую
        var imgs=new Array('bars.svg','Close.svg');
        function imgsrc() {
            i++;i%=imgs.length;
            image.src = imgs[i];
        }