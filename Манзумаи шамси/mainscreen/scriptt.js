for (let i = 0; i < 10; i++) {
    const asteroid = document.createElement('div');
    asteroid.className = 'asteroid';
    asteroid.style.setProperty('--x', Math.random());
    asteroid.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(asteroid);
  }
  