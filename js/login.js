/* </> Lukas Eder */

$(document).ready(function () {
    $('.submit-input').click(function () {
        $('.indicator').css('width','0');
        $('.indicator').animate({width: "100%"},{duration: 1000});
    });

});