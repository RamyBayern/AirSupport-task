$(document).ready(function() {
    $(".toggle-side-menu").click(function() {
        $("body").toggleClass("expanded collapsed", 700);
    });

    $('.toggle-option-menu').click(function() {
        $(this).toggleClass("expanded glyphicon-arrow-left glyphicon-remove", 700);
        $('.option-menu').toggleClass('expanded', 600);
        $('.right-side-menu').toggleClass('expanded', 600);
    });
});
