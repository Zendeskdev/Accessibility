/*global
    jQuery, NAME, window, alert
*/
/**
 * @author Adina Halter
 */
(function ($, NAME) {
    'use strict';
    $('#birthMonth').on('focus', function () {
        $(this).attr('placeholder', '');
    });
    $('#birthMonth').on('blur', function () {
        $(this).attr('placeholder', $(this).attr('data-placeholder'));
    });
    $('#submit').on('click', function () {
        if (!$('input#human').is(':checked')) {
            $('#errorMsg').attr('for', 'human').text('We need to know if you are a human.').show();
        } else {
            $('#errorMsg').removeAttr('for').text('').hide();
            alert('This form validated nicely.  Thank you.');
        }
    });
    $('svg#human').on('click', function () {
        console.log($(this));
        $(this).parent().toggleClass('checked');
        $('input#human').click();
    });
    $('.launch-modal').on('click', function (e) {
        e.preventDefault();
        $('.modal, .block-screen').addClass('active');
    });
    $('.close-dialog').on('click', function (e) {
        e.preventDefault();
        $('.modal, .block-screen').removeClass('active');
    });
}(jQuery, NAME));
