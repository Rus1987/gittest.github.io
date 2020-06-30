$(document).ready(function () {

    $('.js-modal-open').click(function () {
        $('.modal').addClass('modal-active')
    })

    $('.js-modal-close').click(function () {
        $('.modal').removeClass('modal-active')
    })

});