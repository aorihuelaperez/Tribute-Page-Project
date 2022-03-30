function titlecolor() {

    var myTitle = $('.gangBlock'),
        colorChange = Math.floor(Math.random() * 10000), // will give us 4 random numbers
        gangNames = ['Gucci', 'Cool', 'Cat'],
        randomNames = Math.floor(Math.random() * 3);

    myTitle.text(gangNames[randomNames] + ' Gang');
    myTitle.css('color', '#' + colorChange + 'ed');

    $('.fireworks').css('visibility', 'visible');

}