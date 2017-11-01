$(function() {

    var currentNumberBlok1 = $('.header-items .item:first-child .info span:nth-child(2)').text();
    var currentNumberBlok2 = $('.header-items .item:nth-child(2) .info span:nth-child(2)').text();
    var currentNumberBlok3 = $('.header-items .item:last-child .info span:nth-child(2)').text();
console.log(currentNumberBlok2);

    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')
    $('.header-items .item:first-child .info span:nth-child(2)').animateNumber({
        number: currentNumberBlok1,
        numberStep: comma_separator_number_step
    });

    $('.header-items .item:nth-child(2) .info span:nth-child(2)').animateNumber({
        number: currentNumberBlok2,
        numberStep: comma_separator_number_step
    });

    $('.header-items .item:last-child .info span:nth-child(2)').animateNumber({
        number: currentNumberBlok3,
        numberStep: comma_separator_number_step
    });

    $('.layer1').plaxmove({ratioH:0.1,ratioV:0.00});

});
