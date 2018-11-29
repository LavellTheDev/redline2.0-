$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '5417867077',
        limit: 10,
        resolution: 'standard_resolution',
        accessToken: '5417867077.4e5cb54.cd37a8f572c349b49c794171d487fac9',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
