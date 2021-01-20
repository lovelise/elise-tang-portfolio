window.particlesJS("particles-js", {
  particles: {
    number: {
      value: 62,
      density: { enable: true, value_area: 1578.2952832645453 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#fffafa" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.11048066982851817,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 39.45738208161363,
      random: true,
      anim: { enable: true, speed: 0, size_min: 0, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#e8e8e8",
      opacity: 0.4182482500651045,
      width: 7.575817359669817,
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: "top-right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 1362.9002517356944, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
