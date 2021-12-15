$(window).on("load", function () {
  var x = 0,
    y = 0,
    currentX = x,
    currentY = y,
    wWidth = $(this).width(),
    wHeight = $(this).height(),
    threshold = $(".cat").width() / 8,
    cat = {},
    count = 0,
    active = true

  function resize() {
    wWidth = $(this).width()
    wHeight = $(this).height()
    threshold = $(".cat").width() / 8
  }

  $(window).on("resize", function () {
    resize()
  })

  $(this).on("mousemove touchstart touchmove", function (e) {
    if (!active) {
      active = true
    }
    var thresholdY = threshold * 0.3
    x = -threshold / 2 + (threshold / wWidth) * e.pageX
    y = -thresholdY / 2 + (thresholdY / wHeight) * e.pageY
  })

  function catParts() {
    cat.head = $(".cat")
    cat.ears = $(".ears")
    cat.eyes = $(".eyes")
    cat.whiskers = $(".whiskers")
    cat.nose = $(".nose")
    cat.marking = $(".marking")
  }

  function animate() {
    if (!active) {
      count++
      x = Math.sin(count / 20) * 15
    }
    currentX += (x - currentX) / 10
    currentY += (y - currentY) / 10

    var rotationX = (10 / threshold) * currentX,
      rotationY = (10 / threshold) * currentY,
      scaleY = 1 + (0.75 / threshold) * currentY,
      earsY = currentY * -1

    if (earsY < 0) {
      earsY = 0
    }

    cat.head.css({
      transform:
        "rotateX(" + rotationY * -2 + "deg) rotateY(" + rotationX * 2 + "deg)",
    })

    cat.ears.css({
      transform: "translateY(" + earsY + "px) ",
    })

    cat.eyes.css({
      transform: "translate(" + currentX + "px, " + currentY + "px) ",
    })

    cat.nose.css({
      transform:
        "translate(" + currentX * 1.4 + "px, " + currentY * 1.4 + "px)",
    })

    cat.whiskers.css({
      transform:
        "translate(" + currentX * 1.2 + "px, " + currentY * 1.2 + "px)",
    })

    cat.marking.css({
      transform:
        "skewX(" +
        rotationX * 2 +
        "deg) translateX(" +
        currentX / 3 +
        "px) scaleY(" +
        scaleY +
        ")",
    })

    window.requestAnimationFrame(animate)
  }

  catParts()
  window.requestAnimationFrame(animate)
})
