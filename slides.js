//pick all of the images and layers them based on the z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

//keep track of two things


let currentSlide = 0
let z = 1

//when i click the slide area, change the slide based on z index

slideArea.addEventListener("click", function() {
  currentSlide = currentSlide + 1

if (currentSlide > images.length - 1) {
  currentSlide = 0
}
  z = z + 1

  //remove the animation from the style for every images
    images.forEach(image => {
    image.style.animation = ""
  })

  //pick right images
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})

//put mouse over the slide area displace image in random place

slideArea.addEventListener("mouseover", function() {
  images.forEach(image => {
const x = 25 * (Math.floor(Math.random() * 5)) - 60
const y = 25 * (Math.floor(Math.random() * 5)) - 60

    // const x = 100 * Math.random() - 50
    // const y = 100 * Math.random() - 50

    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

//move mouse away image goes back
slideArea.addEventListener("mouseout", function() {
  images.forEach(image => {
    image.style.transform = ""
  })
})
