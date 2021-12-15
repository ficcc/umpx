var increment = 0
var carousel = $(".roll-elements")

setInterval(function () {
  increment++
  carousel.css({
    "-webkit-transform": "rotateX(" + increment * -660 + "deg)",
  })
  var pastSix = 0
  if (increment > 6) {
    increment
  }
  carousel.attr("data-state", (increment % 6) + 1)
}, 3200)
