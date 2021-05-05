export function startSlideInObserver() {
  // Get all the elements you want to show on scroll
  const targets = document.querySelectorAll(".slideIn")

  // Callback for IntersectionObserver
  const callback = function (entries) {
    entries.forEach(entry => {

      // Is the element in the viewport?
      if (entry.isIntersecting) {

        // Add the fadeIn class:
        setTimeout(() => {
          entry.target.classList.add("motion-safe:animate-slideIn")
        }, 100)
      } else {

        // Otherwise remove the fadein class
        // IN DEV MODE, ALWAYS REPLAY THE ANIMATION
        if(process.env.NODE_ENV === 'development'){
          entry.target.classList.remove("motion-safe:animate-slideIn")
        }
      }
    })
  }

  // Set up a new observer
  const observer = new IntersectionObserver(callback)

  // Loop through each of the target
  targets.forEach(target => {

    // Hide the element
    // TODO - decide wether keep the element in the viewport once it hase been slidedIn
    target.classList.add("transform")
    target.classList.add("-translate-x-full")

    // Add the element to the watcher
    observer.observe(target)
  })
}
