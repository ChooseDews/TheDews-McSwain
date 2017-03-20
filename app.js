var test = new Vivus('my-div', {
    type: 'oneByOne',
    duration: 500,
    forceRender: false,
    file: '/images/timber.svg'
});

var test2 = new Vivus('my-div2', {
    type: 'oneByOne',
    duration: 300,
    file: '/images/timberframe3d.svg'
});

var logo = new Vivus('my-div3', {
    type: 'oneByOne',
    duration: 50,
    file: '/images/logo.svg'
}, function(obj) {


    $('#my-div3').addClass('finished');
    console.log('done');

});


var draw3 = function() {

    logo.reset().play();

}


var draw = function() {

    test.reset().play();

}

var draw2 = function() {

    test2.reset().play();

}

var options = [{
    selector: '#my-div',
    offset: 100,
    callback: 'draw()'
}, {
    selector: '#my-div2',
    offset: 100,
    callback: 'draw2()'
}, {
    selector: '#my-div3',
    offset: 100,
    callback: 'draw3()'
}];
Materialize.scrollFire(options);

runtime = function() {


    if ($(window).width() < 800 || $(window).height() < 800) {

        height = $(window).height();
        $('.page').css('min-height', height)
    } else {

        $('.page').height($(window).height());

    }





    $('.vertical').each(function() {

        parent = $(this).parent().height();
        me = $(this).height();
        overflow = (parent - me) / 2 - 64;
        $(this).css('padding-top', overflow)


    });

};



$(window).resize(function() {
    runtime();
});

$(window).ready(function() {
    runtime();
});


$("#logo").load(function() {
    runtime();

});

function myFunction() {
    myVar = setTimeout(runtime, 700);
}
myFunction();


$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
