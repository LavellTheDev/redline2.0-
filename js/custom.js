$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '4781521505',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '4781521505.6756e1c.94dc01eff566411f9b068933663d9704',
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
