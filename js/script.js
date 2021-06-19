// gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
  gsap.to(".dot1", {
    duration: 8,
    ease: "exp.in",
    x: 400,
    y: 400,
    opacity: 1,
    yoyo: true,
    repeat: -1,
  });
  gsap.to(".dot2", {
    duration: 8,
    ease: "exp.in",
    x: -400,
    y: -400,
    opacity: 1,
    yoyo: true,
    repeat: -1,
  });
  $(window).scroll(function (event) {
    var pos_body = $("html,body").scrollTop();
    console.log(pos_body);

    if (pos_body > 200) {
      gsap.to(".back-to-top", {
        duration: 0.5,
        ease: "exp.in",
        x: -10,
        opacity: 1,
        // yoyo: true,
        // repeat: -1,
      });
    } else {
      gsap.to(".back-to-top", {
        duration: 0.5,
        ease: "exp.in",
        x: 100,
      });
    }
    if (pos_body > 197) {
      $(".introduce").addClass("show");
    }
    if (pos_body > 700) {
      $(".skills__header").addClass("show");
      $(".skill__content p").addClass("show");
      $(".line__skill").addClass("skill-show");
    }
    if (pos_body > 1200) {
      $(".skills__pics-bg").addClass("skills__pics-bg-show");
    }
  });
  $(".back-to-top").click(function (event) {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1400
    );
  });
});
