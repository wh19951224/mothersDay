var isPlayingMenuAnimation = false //判断菜单是否正在动画
$(document).ready(function () {
    /* ================================================
    页头设置
    ================================================ */
    top_eventHandler()
    window.onscroll = function (info) {
        if ($('img.menu-btn.option').hasClass('disapear') && !isPlayingMenuAnimation) {
            hideMenu()
        }
        var top = document.documentElement.scrollTop || document.body.scrollTop //获取距离页面顶部的距离
        if (top > 0) {
            $("#top-bar").css("background-color", "#FFFFFF")
        } else {
            //$("#top-bar").css("background-color", "rgba(255, 255, 255, 0)")
            $("#top-bar").css("background-color", "#FFFFFF")
        }
    }

    $(".page-container").on("click", function () {
        if ($('img.menu-btn.option').hasClass('disapear')) {
            hideMenu()
        }
    })

    $(".page-container").on("tap", function () {
        if ($('img.menu-btn.option').hasClass('disapear')) {
            hideMenu()
        }
    })
})
/* ================================================
导航栏设置
================================================ */
// 显示导航栏
var showMenu = function () {
    isPlayingMenuAnimation = true
    $(".menu-btn").unbind('click')
    $(".menu-btn").unbind('tap')
    // 打开按钮动画结束后
    $(".menu-btn.option").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function (event) {
            // 隐藏打开按钮
            $(".menu-btn.option").hide()
            // 绑定关闭按钮事件
            $(".menu-btn.close").on('click', hideMenu)
            $(".menu-btn.close").on('tap', hideMenu)
            isPlayingMenuAnimation = false
        })
    // 显示关闭按钮
    $(".menu-btn.close").show()
    $(".menu-btn.option").addClass("disapear")
    setTimeout(function () {
        $(".menu-btn.close").removeClass("disapear")
    }, 100)
    $("#top-bar").stop().animate({
        "height": "7.5rem",
        "marginBottom": "7.5rem",
    }, 500)
    // $("#top-bar").css({
    //   "height": "8.5rem",
    //   "margin-bottom": "-8.5rem",
    // })
}

// 隐藏导航栏
var hideMenu = function () {
    $(".menu-btn").unbind('click')
    $(".menu-btn").unbind('tap')
    // 关闭按钮动画结束后
    $(".menu-btn.close").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function (event) {
            // 隐藏关闭按钮
            $(".menu-btn.close").hide()
            // 绑定打开按钮事件
            $(".menu-btn.option").on('click', showMenu)
            $(".menu-btn.option").on('tap', showMenu)
        })
    // 显示打开按钮
    $(".menu-btn.option").show()
    $(".menu-btn.close").addClass("disapear")
    setTimeout(function () {
        $(".menu-btn.option").removeClass("disapear")
    }, 100)
    $("#top-bar").stop().animate({
        "height": "2.5rem",
        "marginBottom": "-1.5rem",
    }, 500)
    // $("#top-bar").css({
    //   "height": "1.5rem",
    //   "margin-bottom": "-1.5rem",
    // })
}

// top 事件
var top_eventHandler = function () {

    // 绑定打开按钮事件
    $(".menu-btn.option").on('click', showMenu)
    $(".menu-btn.option").on('tap', showMenu)

    // 下载链接
    $('#header').on('click', '.download-link', function () {
        window.open("//a.app.qq.com/o/simple.jsp?pkgname=com.plusmoney.managerplus")
    })
}

var downloadAPP = function () {
    window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.plusmoney.managerplus"
}