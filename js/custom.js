setTimeout(() => {
    document.body.className="";
}, 500);

const navIcon = document.querySelector('.navIcon');
const cate = document.getElementById('cate');
const allBody = document.body;

console.log(allBody);

navIcon.onclick = () => {

    //console.log('ddd');
    navIcon.classList.toggle('active');
    cate.classList.toggle('active');
};

/*progressbar - scroll custom*/
/*window.addEventListener('scroll', function (e) {
    //alert('ddd');
    const scroll = document.body.scrollTop,
        dh = document.body.offsetHeight,
        wh = document.body.clientHeight;
    scrollPercent = (scroll / (dh-wh)) * 100;
    console.log(e);
    //$('#progressbar').css('height', scrollPercent + '%');
});*/

$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
    scrollPercent = (scroll / (dh-wh)) * 100;
    $('#progressbar').css('height', scrollPercent + '%');
    console.log(dh, wh);

});