$(function(){
    var target = $('.anima');
    var animaClasse = 'inicia-anima';
    var offset = $(window).height() * 3/4;
    
    function animaScroll(){
        var documentTop = $(window).scrollTop();

        target.each(function(){
            var itemTop = $(this).offset().top;

            if (documentTop > itemTop - offset){
                $(this).addClass(animaClasse);
            }else{
                $(this).removeClass(animaClasse); 
            }
        });
    }
    animaScroll();
    $(document).scroll(function(){
        animaScroll();
    });

    // page doenças
    var frame = 0;
    var divTarget2=$('.losango');
    var target2=$('.anima-doenca');
    var animaDoencaClass='anima-doenca-frame2';
    var soundEffect = new Audio();
    var sound = new Audio();
    sound.src = 'ironvolta.mp3';
    soundEffect.src='iron.mp3';
    var stats=1;

    divTarget2.on('mouseenter',function(){
        stats=1;
        var este=$(this);
        console.log(stats);
        
            $(this).find('img').addClass('anima-doenca-hover')
            setTimeout(function(){
                if(stats==1){
                    este.addClass('anima-caixa-hover');
                    stats=0;
                    setTimeout(function(){
                        este.addClass('anima-caixa-hover2');
                        setTimeout(function(){
                            este.find('p').addClass('aparecetexto');
                            este.find('a').addClass('aparece-btn');

                        },340);   
                    },760);    
                }
               
            },1000);
        soundEffect.play();
       
    }).on('mouseleave',function(){
        stats=0;
        $(this).find('img').removeClass('anima-doenca-hover');
        $(this).find('p').addClass('aparecetexto');
        $(this).removeClass('anima-caixa-hover');
        $(this).removeClass('anima-caixa-hover2');
        $(this).find('p').removeClass('aparecetexto');
        $(this).find('a').removeClass('aparece-btn');
        soundEffect.pause();
        soundEffect.currentTime = 0;
        sound.play();
    });
    
    
    // animadoenca();
   
    // setInterval(animadoenca,5000);

















});