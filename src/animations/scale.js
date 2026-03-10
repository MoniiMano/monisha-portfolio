export const scaleIn = (delay = 0) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      delay,
    },
  },
});

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const tapScale = {
  scale: 0.95,
};
