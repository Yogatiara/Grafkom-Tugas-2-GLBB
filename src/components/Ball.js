import React, { useState, useRef, useEffect } from 'react';


export function Ball(props) {
  const {canvasWidth, canvasHeight, xPos, yPos} = props;
  let {xspeed} = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw ball
    ctx.beginPath();
    ctx.arc(xPos, canvasHeight - yPos, 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    // p5.ellipse(xPos, height - yPos, r*2, r*2);
    // xPos += xspeed;
    // counter -= 1;
    // if (xPos > width - r * 2 || xPos < r * 2) {
    //   xspeed = -xspeed;
    
    // }


  }, [xPos, yPos]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
}



export const BallCanvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const x = canvas.width / 2; // Koordinat x bola
    const y = canvas.height / 2; // Koordinat y bola
    let radius = 25; // Radius bola
    let dx = 5; // Kecepatan awal bola
    let dy = 5;

    const drawBall = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = 'red';
      context.fill();
      context.closePath();
    };

    const animate = () => {
      drawBall();

      if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
      }

      x += dx;
      y += dy;

      dx *= 0.99; // Mengurangi kecepatan bola secara beraturan
      dy *= 0.99;

      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        dx = 0;
        dy = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
};



