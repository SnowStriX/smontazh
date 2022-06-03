window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);
})

// back_arrow = document.getElementById('back').onclick = (e) => {
     
// }
// next_arrow = document.getElementById('next').onclick = (e) => {
    
// }
$(function() {

    current_img = [
        'img/аысысыс1.png',
        'img/image12.png',
        'img/image9.png',
        'img/image10.png',
        'img/image11.png',
    ]

    let i = 0;

    function highlight(content){

        for(j = 0; j < 5; j++){
            $('#' + String(j)).removeClass('active');
        }

        content.addClass('active');
    }

    $("#next").click(function () {
        i++;
        if(i == 5){
            i = 0;
        }
        let conteiner =  $('#' + String(i));
        $('.mobile_gallery').css('background-image', 'url(' + current_img[i] + ')');
        highlight(conteiner);
    });
    
    $("#back").click(function () {
        i--;
        if(i < 0){
            i = 4;
        }
        let conteiner =  $('#' + String(i));
        $('.mobile_gallery').css('background-image', 'url(' + current_img[i] + ')');
        highlight(conteiner);
    });

});