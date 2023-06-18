$(function(){


//project hove 
$('.about-item .item-inner').hover(function(){
    $(this).addClass('active');
}, function(){
    $(this).removeClass('active');
})


// $(document).on('mousemove', function(e) {
//     var xPos = e.pageX;
//     var yPos = e.pageY;

//     let flag = false;
    
//     $('.project-item').each(function(i, el){
//         $(el).offset().top
//         var xStart = $(el).offset().left
//         var xEnd = xStart + $(el).width()
    
//         var yStart = $(el).offset().top
//         var yEnd = yStart + $(el).height()

//         if (xPos >= xStart + 10 && xPos <= xEnd -10 && yPos >= yStart + 10 && yPos <= yEnd - 10) {
            
//             let color = el.dataset.img

//           $('.circle-out').addClass('on')
//             $('.circle-out').css({
//               'top': yPos,
//               'left': xPos,
//               'background-color': color
//             }); 
//             $('.circle-out').stop().animate({
//                 'transform': 'scale(1.5)'
//             },100)

//             flag = true;
//         }        
//         });
         
//         if (flag == false) {
//             $('.circle-out').removeClass('on')
//         }
//     })
                
    //  else if (xPos >= xStart2 && xPos <= xEnd2 && yPos >= yStart2 && yPos <= yEnd2) {
    //     $('.circle-out').addClass('on')
    //     $('.circle-out').css({
    //       'top': yPos,
    //       'left': xPos,
    //       'background-color': 'black'
    //     });
    // } 
   
    //about
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".project-item");

    gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".sc-project .project-inner",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".sc-about .inner").offsetWidth
    }
    });

    //footer
    $('.link-mail').hover(function(){
        $(this).addClass('on')
    }, function(){
            $(this).removeClass('on')
    })
})