"use strict";
initPageLoader(), $(document).ready((function() {
    if ("development" === env && changeDemoImages(), feather.replace(), initDarkMode(), initAnimatedModals(),
        $("#login-submit").on("click", (function() {
            var i = $(this);
            i.addClass("is-loading"), setTimeout((function() {
                i.removeClass("is-loading"),
                    $("#login-form").submit()
            }), 1e3)
        })), $("#forgot-link, #cancel-recover").on("click", (function() {
        $(this).closest(".is-form").find("form, .form-text").toggleClass("is-hidden")
    })), $("#huro-signup").length) {
        if ($(".step-icon").on("click", (function() {
            var i = $(this).attr("data-step"),
                e = $(this).attr("data-progress");
                $(this).prevAll().addClass("is-done"),
                    $(this).removeClass("is-done").addClass("is-active"),
                    $(this).nextAll().removeClass("is-active is-done"),
                    $("#signup-steps-progress").val(e), void 0 !== i && ($(".signup-columns").addClass("is-hidden"), $("#" + i).removeClass("is-hidden"), $(".avatar-carousel").slick("setPosition"), $(".card-bg").addClass("faded")), "signup-step-1" == i && $(".card-bg").removeClass("faded")
            })),

            // Listen for validation complete and jump to next step
            $("#confirm-step-1").on("click", (function() {
                var i = $(this);
                i.addClass("is-loading"),
                    window.addEventListener("readyToNextStep", function(e) {
                        setTimeout((function() {
                            i.removeClass("is-loading"),
                                $(".card-bg").addClass("faded"),
                                $(".signup-steps").removeClass("is-hidden"),
                                $("#signup-step-1, #signup-step-2").toggleClass("is-hidden"),
                                $(".avatar-carousel").slick("setPosition")
                        }), 1e3);

                        setTimeout((function() {
                                var i = $(".avatar-carousel");
                                i.on("init", (function() {
                                    feather.replace()
                                })), i.on("afterChange", (function() {
                                    var i = $(".avatar-carousel").find(".slick-current img").attr("src");
                                    $(".picture-selector .image-container img").attr("src", i), $("#confirm-step-2").removeClass("is-disabled")
                                })), $(".avatar-carousel").slick({
                                    centerMode: !0,
                                    dots: !1,
                                    infinite: !0,
                                    centerPadding: "100px",
                                    prevArrow: "<div class='slick-custom is-prev'><i data-feather='chevron-left'></i></div>",
                                    nextArrow: "<div class='slick-custom is-next'><i data-feather='chevron-right'></i></div>",
                                    slidesToShow: 3
                                }), $(".slick-slider").on("click", ".slick-slide", (function(i) {
                                    i.stopPropagation();
                                    var e = $(this).data("slick-index");
                                    $(".slick-slider").slick("slickCurrentSlide") !== e && $(".slick-slider").slick("slickGoTo", e)
                                }))
                        }), 1e3)
                    });

            })),

            $(".avatar-carousel").length) {

            }


        FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation, FilePondPluginFileValidateSize, FilePondPluginImageEdit), FilePond.create(
        document.querySelector(".signup-filepond"), {
                labelIdle: '<i class="lnil lnil-cloud-upload"></>',
                imagePreviewHeight: 140,
                imageCropAspectRatio: "1:1",
                imageResizeTargetWidth: 140,
                imageResizeTargetHeight: 140,
                stylePanelLayout: "compact circle",
                styleLoadIndicatorPosition: "center bottom",
                styleProgressIndicatorPosition: "right bottom",
                styleButtonRemoveItemPosition: "left bottom",
                styleButtonProcessItemPosition: "right bottom"
            }), document.querySelector(".signup-filepond").addEventListener("FilePond:addfile", (function(i) {
            console.log("File added", i.detail), document.getElementById("signup-profile-upload").classList.remove("is-disabled")
        })),
        $("#confirm-step-2").on("click", (function() {
            var i = $(this);
            i.addClass("is-loading"), setTimeout((function() {
                i.removeClass("is-loading"), $(".step-icon:nth-child(2)").removeClass("is-inactive").trigger("click")
            }), 1e3)
        })),

        $("#finish-signup").on("click", (function() {
            var i = $(this);
            i.addClass("is-loading"), $(".step-icon.is-inactive").removeClass("is-inactive").trigger("click"), setTimeout((function() {
                i.removeClass("is-loading")
                // ,  $("#signup-form").submit()
                // , window.location.href = "/admin/dashboard"
            }), 1400)
        }))
    }
}));
