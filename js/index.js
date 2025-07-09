//my www index

$(window).ready(function () {
    $('main').css({
        opacity: 1
    });

    $('.m-name').css({
        opacity: 1
    });

    $('.m-port').css({
        opacity: 1
    });
});


$(function () {

    //초기설정
    $('.cb3').css('display', 'block');

    $('.btn-prev').click(function () {
        //slide(false);
        slide(0);

        change2();
    });

    $('.btn-next').click(function () {
        //slide(true);
        slide(1);

        change();
    });

});

function change2() {
    $('.caption').hide();
    $('.cb3').find('.caption').delay(1000).fadeIn(600);
}

// 슬라이드 함수
var stat = 0; //광클금지 제어 (0-클릭허용/1-클릭잠금) 

function slide(direction) {

    if (stat === 1) return false;
    stat = 1;

    //if else 문
    // direction = true, if문 실행, 다음 이동 
    // direction = false, else문 실행, 이전 이동

    if (direction) {
        //다음 이동 - 맨 앞의 li를 맨 뒤로 이동
        //alert('다음 케이크 나와라~~~~');

        $('.viewer li').first().insertAfter($('.viewer li').last());

    } else {
        //이전 이동 - 맨 뒤에 li를 맨 앞으로 이동
        //alert('이전 케이크 나와라~~~~');

        $('.viewer li').last().insertBefore($('.viewer li').first());
    }

    //변경된 li 순서를 다시 읽어와서
    //순서대로 클래스(.cb1 ~ .cb5)를 부여! 

    var viewer = document.querySelector('.viewer');
    var box = viewer.querySelectorAll('li');

    console.log(box);

    for (var i = 0; i < box.length; i++) {
        //클래스 재부여!
        box[i].setAttribute('class', 'cb' + (i + 1));
    }

    //잠금해제!
    setTimeout(function () {
        stat = 0;
    }, 1000);


    /*
    setTimeout - 일정시간 후에 단 한번 코드 실행!

    var 참조변수 = setTimeout(function(){}, 시간);

    clearTimeout(참조변수);
    */
}

$(document).ready(function () {
    $('a.modal').click(function (evt) {
        evt.preventDefault();

        var imgSrc = $(this).attr('href');
        console.log(imgSrc);
        /* imgSrc 는 보이는 썸네일을 클릭했을때 attr 메서드로 href 속성을 변수에 부여함, 
        href 는 a 링크 태그. */

        $('#black').show();
        /* black을 display:none 으로 초기설정을 했기 때문에 show 메서드로 화면에 보여줌 */

        $('#big').html('<img src=" ' + imgSrc + ' " alt="">');
        /* a.modal을 클릭했을때 #black을 화면에 보여주면서 #big에 html태그로 img src 속성을 추가하며 변수에 담겨있던 href 로 a 태그의 href에 부여된 이미지를 보여줌 */
    });

    $('#black').click(function () {
        $(this).hide().find('img').remove();
    });
});

$(document).ready(function () {

    var scR = false;

    $('.lnb .por a').click(function (e) {

        e.preventDefault();

        if (scR) return;

        scR = true;

        var targetScroll = 1000; // 절대 위치로 설정

        $('html, body').animate({
            scrollTop: targetScroll
        }, 800, function () {
            scR = false;
        });
    });


    $('.lnb .con a').click(function (e) {

        e.preventDefault();

        if (scR) return;

        scR = true;

        var targetScroll = 2500; // 절대 위치로 설정

        $('html, body').animate({
            scrollTop: targetScroll
        }, 800, function () {
            scR = false;
        });
    });
});