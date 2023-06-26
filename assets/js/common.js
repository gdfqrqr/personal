$(function(){
    gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.saveStyles(".mobile, .desktop");
    ScrollTrigger.matchMedia({
        "(min-width: 1023px)": function() {
            //about
            let sections = gsap.utils.toArray(".about-item");

            gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".sc-about .about-list",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                // end: () => "+=" + document.querySelector(".sc-about .inner").offsetWidth
            }
            });
        },
        "all": function() {
                //visual
            gsap.to('.icon',0.7, {opacity:0})

            var word = new TimelineMax()
            .addLabel('b')
            .to('.word',0.7, {visibility:'visible'},'b')
            .to('.word',0.7, {opacity:1},'b')

            .addLabel('a')
            .to('.word',0.7, {opacity:0},'a')
            .to('.icon',0.7, {opacity:1},'a')

            .repeat(-1);

            gsap.to('.icon2',0.9, {opacity:0})

            var word2 = new TimelineMax()
            .addLabel('b')
            .to('.word2',0.7, {visibility:'visible',delay:0.5},'b')
            .to('.word2',0.7, {opacity:1,delay:0.5},'b')

            .addLabel('a')
            .to('.word2',0.7, {opacity:0,delay:0.5},'a')
            .to('.icon2',0.7, {opacity:1,delay:0.5},'a')

            .repeat(-1);

            var circle = new TimelineMax()

            .to('.circle',0.5, {width:'20vw',delay:1})
            .to('.circle',0.5, {width:'6.5vw',delay:2})
            .repeat(-1)

        }

    })
    
  







    //project hover
    $('.project-item .item-inner').hover(function(){
        $(this).addClass('active');
    }, function(){
        $(this).removeClass('active');
    })



    //footer
    $('.link-mail').hover(function(){
        $(this).addClass('on')
    }, function(){
        $(this).removeClass('on')
    })

    var textWrapper = document.querySelector('.ml12');
    var textWrapper2 = document.querySelector('.ml12-2');
    var textWrapper3 = document.querySelector('.ml12-3');
    var textWrapper4 = document.querySelector('.ml12-4');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    })

    .add({
        targets: '.ml12-2 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12-2 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    })
    .add({
        targets: '.ml12-3 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12-3 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    })
    .add({
        targets: '.ml12-4 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12-4 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    });

    
    // 스크롤 footer 도달시 header 색상 바꾸기
    $(window).on('scroll', function () {
        
        var here = $(".footer").offset().top;
        var here2 = $(".sc-works").offset().top;
        var here3 = $(".sc-project").offset().top;
        var height = $(document).scrollTop();

        if(here2> height){
            $('.logo a').css('color', 'black')
            $('.menu-item a').css('color', 'black')
        }
        if(here2 <= height){
            $('.logo a').css('color', 'white')
            $('.menu-item a').css('color', 'white')
        } 
        if(here3 <= height){
            $('.logo a').css('color', 'black')
            $('.menu-item a').css('color', 'black')
        }
        height += 1;
        if (here <= height) {
            $('.logo a').css('color', 'white')
            $('.menu-item a').css('color', 'white')
        }
    })

    //aos
    AOS.init();

    //works hover event
    $('.works-item.left').hover(function(){
        $('.sc-works').css('background-color', '#8c1d15')
    }, function(){
        $('.sc-works').css('background-color', '#000')
    })
    $('.works-item.right').hover(function(){
        $('.sc-works').css('background-color', '#12316c')
    }, function(){
        $('.sc-works').css('background-color', '#000')
    })
})