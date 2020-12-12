$(document).ready(function () {
    $(".switcher").on("click", function (e) {
        e.preventDefault();

        if ($(".switcher").hasClass("open")) {
            $(".switcher").removeClass("open");
            $("aside").removeClass("open");
            $("main").removeClass("open");
            $("header").removeClass("open");
        } else {
            $(".switcher").addClass("open");
            $("aside").addClass("open");
            $("main").addClass("open");
            $("header").addClass("open");
        }
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('#collapseFilters').removeClass("show");
    }
});
