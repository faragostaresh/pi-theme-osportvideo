(function ($) {
    $(document).ready(function () {
        $(".pi-mobile .pi-section").find(".col-md-4").addClass("col-xs-4").removeClass("col-md-4");
        $(".pi-mobile .pi-section").find(".col-md-8").addClass("col-xs-8").removeClass("col-md-8");
        $(".pi-mobile .pi-section").find(".col-md-3").addClass("col-xs-3").removeClass("col-md-3");
        $(".pi-mobile .pi-section").find(".col-md-9").addClass("col-xs-8").removeClass("col-md-9");

        $(".pi-mobile .pi-section").find(".col-sm-1").removeClass("col-sm-1");
        $(".pi-mobile .pi-section").find(".col-sm-2").removeClass("col-sm-2");
        $(".pi-mobile .pi-section").find(".col-sm-3").removeClass("col-sm-3");
        $(".pi-mobile .pi-section").find(".col-sm-4").removeClass("col-sm-4");
        $(".pi-mobile .pi-section").find(".col-sm-5").removeClass("col-sm-5");
        $(".pi-mobile .pi-section").find(".col-sm-6").removeClass("col-sm-6");
        $(".pi-mobile .pi-section").find(".col-sm-7").removeClass("col-sm-7");
        $(".pi-mobile .pi-section").find(".col-sm-8").removeClass("col-sm-8");
        $(".pi-mobile .pi-section").find(".col-sm-9").removeClass("col-sm-9");
        $(".pi-mobile .pi-section").find(".col-sm-10").removeClass("col-sm-10");
        $(".pi-mobile .pi-section").find(".col-sm-11").removeClass("col-sm-11");
        $(".pi-mobile .pi-section").find(".col-sm-12").removeClass("col-sm-12");

        $(".pi-mobile .guide-block").find(".col-xs-12").removeClass("col-xs-12");
        $(".pi-mobile .guide-block").find(".col-md-6").addClass("col-xs-6").removeClass("col-md-6");
        $(".pi-mobile .guide-block").find(".col-md-3").addClass("col-xs-3").removeClass("col-md-3");

        $(".pi-mobile .widget-media-list").find(".col-xs-2").removeClass("col-xs-2");
        $(".pi-mobile .widget-media-list").find(".col-md-1").addClass("col-xs-1").removeClass("col-md-1");
    });
    $(document).ready(function () {
        $(".dropdown-toggle").click(function () {
            window.open($(this).attr("href"),"_self");
        });
    });
})(jQuery)