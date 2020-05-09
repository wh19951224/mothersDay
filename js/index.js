/* ================================================
全局设置
================================================ */
var baseUrl = "https://www.erplus.co"
var baseResUrl = '/mp'

var bubbleIndex //气泡周期执行index
$(document).ready(function () {
  /* ================================================
  首部轮播模块
  ================================================ */
  var firstSwiperBanner = $(".container-first .g-banner.swiper-container").swiper({
    loop: true,
    autoplay: 4500,
    autoplayDisableOnInteraction: false,
    pagination: '.swiper-pagination',
    paginationClickable: true,
  })

  /* ================================================
  报道轮播模块
  ================================================ */
  var firstSwiperBanner = $(".container-fourth .g-banner.swiper-container").swiper({
    loop: true,
    autoplay: 3000,
    effect: 'fade',
    autoplayDisableOnInteraction: false,
    pagination: '.swiper-pagination',
    paginationClickable: true,
  })

  /* ================================================
   提交预约信息
   ================================================ */
  //验证信息
  $(".container-fifth-form").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
        minlength: 11,
      },
      describe: {
        required: true,
      }
    },
    messages: {
      name: {
        required: "请填写姓名",
      },
      phone: {
        required: "请填写手机号",
        minlength: "请正确填写您的手机号码",
      },
      describe: {
        required: "请填写描述",
      }
    },
    submitHandler: function (form) {
      var name = $('.container-fifth-form .name-box input').val()
      var phone = $('.container-fifth-form .phone-box input').val()
      var describe = $('.container-fifth-form .textarea-box textarea').val()
      var param = {
        name: name,
        phoneNum: phone,
        companyInfo: describe,
      }
      $.ajax({
        url: 'https://www.plusmoney.cn/feedback/MpBespoke',
        type: 'POST',
        dataType: 'JSON',
        data: JSON.stringify(param),
        success: function (data) {
          if (data.result == 0) {
            $('.container-fifth-form .name-box input').val('')
            $('.container-fifth-form .phone-box input').val('')
            $('.container-fifth-form .textarea-box textarea').val('')
            layer.open({
              type: 1,
              title: false,
              move: false,
              resize: false,
              closeBtn: 0,
              time: 2000,
              shade: 0,
              area: ['4rem', '0.8rem'],
              content: '<p class="dialog-message">预约演示成功！</p>'
            })
          } else {
            layer.open({
              type: 1,
              title: false,
              move: false,
              resize: false,
              closeBtn: 0,
              time: 2000,
              shade: 0,
              area: ['4rem', '0.8rem'],
              content: '<p class="dialog-message">预约演示失败！</p>'
            })
          }
        }
      })
    }
  })


  /* ================================================
  初始设置
  ================================================ */
  makeLogo() // 制作logo动画
})

/* ================================================
  其它方法
 ================================================ */
var goAppointment = function () {
  $("html, body").scrollTop(0).animate({
    scrollTop: ($('.container-fifth').offset().top) - 50
  }, 1000)
}

var learnMore = function() {
  window.location.href = 'culture.html'
}

/* ================================================
  制作logo动画
================================================ */
var makeLogo = function () {
  $('.animate-1').stop().animate({ //初始注水
    'height': "2.7rem",
  }, 500, function () {
    $('.filament-off').stop().hide(10, function () { //隐藏灯丝
      $('.animate-2').stop().show(10, function () { //点亮灯丝
        $('.animate-3').css({
          "display": "block"
        })
        $('.animate-3').addClass('animated flash')
        setTimeout(function () {
          $('.animate-4').show(10, function () { //冒泡
            $('.animate-4').addClass('animated jello')
            bubbleIndex = setInterval(function(){ //气泡不停抖动
                $('.animate-4').removeClass('jello')
                setTimeout(function(){
                  $('.animate-4').addClass('jello')
                },1000)
            },3000)
            $('.animate-1').css({
              'top': '2.6rem' //固定第一次注水
            })
            $('.container-first .swiper-first.container-first-middle').css({
              'height': '4rem' //设定底部 
            })
            $('.animate-5').stop().animate({
              'height': '1.76rem' //第二次注水
            }, 500, function () {
              $('.animate-6').stop().animate({ //进度条
                'width': '0.7rem'
              }, 500, function () {
                $('.animate-7').css({ //苹果出现
                  'display': 'block'
                })
                $('.animate-7').stop().animate({ //落下苹果
                  'top': '4.8rem'
                }, 500, function () { //向右移动
                  $('.apple-group').stop().animate({
                    'left': '1.333rem'
                  }, 500, function () {
                    $('.arrow').rotate({ //旋转指针
                      center: ["0", "50%"],
                      animateTo: 30
                    })
                    $('.animate-5').css({ //固定第二次注水
                      'top': '2.25rem'
                    })
                    $('.container-first .swiper-first.container-first-middle').css({
                      'height': '3.8rem' //设定底部 
                    })
                    $('.animate-8').stop().animate({ //产生logo
                      'height': '2.04rem'
                    }, 300)
                  })
                })
              })
            })
          })
        }, 500)
      })
    })
  })
}

/* ================================================
观看视频
================================================ */
var watchVideo = function (index) {
  var linkList = [{
    'link': 'https://player.youku.com/embed/XMzE2MzQyMzYyMA=='
  }, {
    'link': 'https://player.youku.com/embed/XMzI5Mjc5Mzc2OA=='
  }, {
    'link': 'https://player.youku.com/embed/XMzE2NTQ1NjQxNg=='
  }, {
    'link': 'https://player.youku.com/embed/XMzE2MzQ5NjQ5Ng=='
  }, {
    'link': 'https://player.youku.com/embed/XMzA0ODY0MDQ4OA=='
  }]
  var useLink = linkList[index].link

  layer.open({
    type: 1,
    resize: false,
    title: false,
    area: ['9rem', '7rem'],
    content: '<iframe style="width:9rem;height:7.1rem;" src="' + useLink + '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen></iframe>', //优酷
    move: false,
    scrollbar: false,
  })
}

/* ================================================
媒体报道跳转
================================================ */
var goReportPage = function(index) {
  var reportPage = [{
    'link': 'http://36kr.com/p/5080225.html',
  },{
    'link': 'http://fm.qq.com/show/rd001Hjdl50Cc3wv'
  },{
    'link': 'http://www.chuangkem.com/archives/102918'
  },{
    'link': 'https://mp.weixin.qq.com/s?__biz=MzAwOTc5NzA3Nw==&mid=2652472268&idx=1&sn=b33f510e2c104fa812ed8b3f3e495d35&scene=1&srcid=0712Da9spM2JLZ5gajE0VLO5&key=77421cf58af4a6538b0fe52b6da3ed8e040d82ef3c09f10fcc5fc8524efe5b40737425485130311d8b2cdfb173e4a6c5&ascene=0&uin=Mzk1NTI1NDM1&devicetype=iMac+MacBook9%2C1+OSX+OSX+10.11.5+build'
  },{
    'link': 'http://cn.technode.com/post/2016-06-17/saas-6/'
  },{
    'link': 'http://www.pingwest.com/manager-plus-in-shenzhen/'
  },{
    'link': 'http://www.plusmoney.cn/zxdt/mtbd/151.html'
  },{
    'link': 'http://m.lieyunwang.com/archives/177021'
  }]
  var reportLink = reportPage[index].link
  window.location.href = reportLink
}