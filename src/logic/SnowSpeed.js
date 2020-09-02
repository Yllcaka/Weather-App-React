const SnowSpeed = () => {
  let snowBalls = document.querySelectorAll('[id^="snow"]');
  snowBalls.forEach((snowBall) => {
    snowBall.style.animationDuration = `${Math.floor(Math.random() * 8) + 2}s`;
  });
};

export { SnowSpeed };
