$(function () {
  $(document).on('scroll', function () {
    var a = $(document).scrollTop() + $(window).height();
    $('.footer').css({
      bottom: Math.max(-60, a - $(document).height()) + 'px',
    });
  });
});
