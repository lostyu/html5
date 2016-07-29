// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(function () {

    // 表单
    if ($.validator) {
        $.validator.setDefaults({
            debug: true
        });

        // rule
        $.validator.addMethod('tel', function (value, element, params) {
            var reg = /1\d{10}/;
            return this.optional(element) || reg.test(value);
        }, '请输入正确的手机号');


        // 注册
        window.validateForm1 = $('.j-validate1').validate({
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.appendTo(element.parents('.ipt').next(".errTips"));
            }
        });

        // 登陆
        window.validateForm2 = $('.j-validate2').validate({
            //errorElement: 'span',
            //focusInvalid: false,
            //groups: {
            //    login: 'upass uname'
            //},
            //errorPlacement: function (error) {
            //    $('.errPlace').html();
            //    $(error).appendTo('.errPlace');
            //},
            //errorContainer: $('.errPlace')


            errorPlacement: function(){}
        });

        window.validateForm3 = $('.j-validate3').validate({
            errorElement: 'p',
            errorPlacement: function(error, element){
                error.appendTo(element.parents('.ipt').find(".errorTips2"));
            }
        });


        // 登陆表单
        var $login = $('.m-login'),
            $btnLogin = $login.find('.j-btn-login'),
            $ewm = $login.find('.j-ewm'),
            $pc = $login.find('.j-pc'),
            $formBox = $login.find('.j-formBox'),
            $ewmBox = $login.find('.j-ewmBox');

        $btnLogin.click(function(){
            //alert(validateForm2.form());
        });

        $ewm.click(function(){
            $formBox.hide();
            $ewmBox.show();
            $pc.show();
            $(this).hide();
        });

        $pc.click(function(){
            $formBox.show();
            $ewmBox.hide();
            $ewm.show();
            $(this).hide();
        });
    }
});



