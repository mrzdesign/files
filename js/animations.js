gsap.registerPlugin(ScrollTrigger); // ScrollTrigger

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  gsap.to(".first", {
    scrollTrigger: {
      trigger: ".first",
      scrub: true,
      pin: true,
      start: "center center",
      end: "100%",
      toggleClass: "active-1",
      ease: "power2",
      markers: false,
      toggleActions: "play reverse",
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".second", {
    scrollTrigger: {
      trigger: ".second",
      scrub: true,
      pin: true,
      start: "center center",
      end: "100%",
      toggleClass: "active-2",
      ease: "power2",
      markers: false,
      toggleActions: "play reverse",
      invalidateOnRefresh: true,
    },
  });

  gsap.to(".third", {
    scrollTrigger: {
      trigger: ".third",
      scrub: true,
      pin: true,
      start: "center center",
      end: "100%",
      toggleClass: "active-3",
      ease: "power2",
      markers: false,
      toggleActions: "play reverse",
      invalidateOnRefresh: true,
    },
  });

  // Make the sections snap

  // const sections = gsap.utils.toArray("section");

  // ScrollTrigger.create({
  //   trigger: ".first",
  //   start: "top top",
  //   endTrigger: ".third",
  //   end: "bottom bottom",

  //   //snap: 1 / (sections.length - 1)

  //   snap: {
  //     snapTo: 1 / (sections.length - 1),
  //     duration: { min: 0.25, max: 0.75 }, // the snap animation should be at least 0.25 seconds, but no more than 0.75 seconds (determined by velocity)
  //     delay: 0.125, // wait 0.125 seconds from the last scroll event before doing the snapping
  //     ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  //   },
  // });
});

// Add class to lottie player

// const lottiePlayer = document.querySelector(".lottie-player");
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const sectionId = entry.target.getAttribute("data-section-id");
//     if (entry.isIntersecting) {
//       lottiePlayer.classList.add(`active-${sectionId}`);
//     } else {
//       lottiePlayer.classList.remove(`active-${sectionId}`);
//     }
//   });
// });

// document.querySelectorAll("section").forEach((section) => {
//   observer.observe(section);
// });

// Lottie Animation

// LottieInteractivity.create({
//   player: ".lottie-player",
//   mode: "chain",
//   actions: [
//     {
//       state: "autoplay",
//       transition: "onComplete",
//       frames: [0, 20],
//     },
//     {
//       state: "loop",
//       frames: [21, 40],
//       reset: true,
//     },
//     {
//       state: "loop",
//       frames: [41, 150],
//       reset: true,
//       // selector: ".active-3", // add a selector for this action
//     },
//   ],
// });

// Select frames to play on each class trigger
// const player = document.querySelector(".lottie-player");

// const classFrameMap = {
//   "active-1": [0, 20],
//   "active-2": [21, 40],
//   "active-3": [41, 150],
// };

// const lottieInteractivity = LottieInteractivity.create({
//   player: ".lottie-player",
//   mode: "chain",
//   actions: [
//     {
//       state: "autoplay",
//       transition: "onComplete",
//       frames: [0, 20],
//     },
//     {
//       state: "loop",
//       frames: [21, 40],
//       reset: true,
//     },
//     {
//       state: "loop",
//       frames: [41, 150],
//       reset: true,
//     },
//   ],
// });

// // Add an event listener for the animationstart event
// player.addEventListener("animationstart", () => {
//   const currentClass = player.classList.item(1);

//   if (currentClass in classFrameMap) {
//     const [startFrame, endFrame] = classFrameMap[currentClass];
//     player.seek(startFrame);
//     player.playSegments([startFrame, endFrame], true);
//   } else {
//     player.stop();
//   }
// });

// player.addEventListener("loaderror", () => {
//   console.error("Error loading Lottie animation");
// });

LottieInteractivity.create({
  player: ".lottie-player",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "loop",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 130],
    },
  ],
});
