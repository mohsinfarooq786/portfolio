/**
 * Centralized Animation Presets & Motion Tokens
 * 
 * Inspired by visuvate.com, nexstudio.tech, and gallery-play.be.
 * Uses fine-tuned cubic-bezier curves for buttery smooth, organic motion
 * while keeping transitions lightweight and performant.
 */

// Custom Easing Curves
export const EASING = {
  // Signature smooth ease-out curve (used by Visuvate and Apple)
  smoothOut: [0.16, 1, 0.3, 1],
  // Snappier tactile curve for button hovers and toggles
  snappy: [0.25, 1, 0.5, 1],
  // Dramatic curtain wipe easing curve
  curtain: [0.76, 0, 0.24, 1],
};

// Page Transition Variants (Route Enter / Exit)
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING.smoothOut,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.35,
      ease: EASING.smoothOut,
    },
  },
};

// Curtain Wipe Overlay Transition Variants (visuvate.com / douglus.site inspired)
export const curtainVariants = {
  initial: {
    scaleY: 0,
    transformOrigin: "bottom",
  },
  animate: {
    scaleY: [0, 1, 1, 0],
    transformOrigin: ["bottom", "bottom", "top", "top"],
    transition: {
      duration: 0.85,
      times: [0, 0.45, 0.55, 1],
      ease: EASING.curtain,
    },
  },
};

// Fade and Slide Up Entrance for Section Blocks
export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: customDelay,
      ease: EASING.smoothOut,
    },
  }),
};

// Staggered Container for Lists and Grids
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Child Item for Staggered Container
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING.smoothOut,
    },
  },
};

// Project Card Image Hover Variants (gallery-play.be inspired)
export const projectImageHoverVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASING.smoothOut,
    },
  },
  hover: {
    scale: 1.04,
    transition: {
      duration: 0.6,
      ease: EASING.smoothOut,
    },
  },
};

// Tactile Button Hover / Tap Variants
export const buttonTapVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.25, ease: EASING.snappy },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.15, ease: EASING.snappy },
  },
};
