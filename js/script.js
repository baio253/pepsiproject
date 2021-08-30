$(document).ready(function () {
    $('#input-firstName').blur(function () {
        var input = document.getElementById('input-firstName').value;
        if (input.length < 1) {
            $('#ve-firstName').css('transform', 'translateY(0%)')
        } else {
            $('#ve-firstName').css('transform', 'translateY(-100%)')
        }
    });
    $('#input-lastName').blur(function () {
        var input = document.getElementById('input-lastName').value;
        if (input.length < 1) {
            $('#ve-lastName').css('transform', 'translateY(0%)')
        } else {
            $('#ve-lastName').css('transform', 'translateY(-100%)')
        }
    });
    $('#input-email').blur(function () {
        var input = document.getElementById('input-email').value;
        if (input.length < 1) {
            $('#ve-email').css('transform', 'translateY(0%)')
        } else {
            $('#ve-email').css('transform', 'translateY(-100%)')
        }
    });
    $('#input-DOB').blur(function () {
        var input = document.getElementById('input-DOB').value;
        if (input.length < 1) {
            $('#ve-DOB').css('transform', 'translateY(0%)')
        } else {
            $('#ve-DOB').css('transform', 'translateY(-100%)')
        }
    });
    $('#input-ZIP').blur(function () {
        var input = document.getElementById('input-ZIP').value;
        if (input.length < 1) {
            $('#ve-ZIP').css('transform', 'translateY(0%)')
        } else {
            $('#ve-ZIP').css('transform', 'translateY(-100%)')
        }
    });
    $('#view-products').click(function () {
        $('#products-page').slideToggle();
        $('#main-container').slideToggle();
        $('footer').slideToggle();
    });
});