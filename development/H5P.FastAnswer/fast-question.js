var H5P = H5P || {};

H5P.FastAnswer = (function ($) {

    function C(options, id) {
        this.options = $.extend(true, {}, {
            question: "",
        }, options);
        // Keep provided id.
        this.id = id;
    }

    function hideAnswers() {
        $('.answerWrapper').hide();
        clearInterval(showTimer); // todo: didnt work ! why!
    }

    function showTimer(start) {
        start = 10
        $('#starTimer').hide()
        $('.answerWrapper').show()
        setInterval(function () {
            if (start !== 0) {
                $('.timer').text(start = start - 1);
            } else {
                $('.timer').text("Die Zeit ist abgelaufen!");
                hideAnswers()
            }
        }, 1000);
    }

    /**
     * Attach function called by H5P framework to insert H5P content into
     * page
     *
     * @param {jQuery} $container
     */
    C.prototype.attach = function ($container) {
        $container.addClass("moduleWrapper");

        $container.append('<div class="questionWrapper"><h1>' + this.options.question + '</h1></div>');
        $container.append('<div class="timeWrapper"><span class="timer"></span></div>');
        $container.append('<div class="buttonWrapper"><button id="starTimer">Start!</button></div>');
        $container.append(
            '<div class="answerWrapper">' +
            '<ul>' +
            '<li>Nur sein!</li>' +
            '<li>Nicht nur sein!</li>' +
            '</ul>' +
            '</div>');
        $("#starTimer").click(showTimer);
    };

    return C;
})(H5P.jQuery);
