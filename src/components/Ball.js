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



export const BallCanvas = () => {
    const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let x = 50; // Koordinat x bola
    let y = canvas.height / 2; // Koordinat y bola
    let radius = 25; // Radius bola
    let speed = 10; // Kecepatan awal bola
    let acceleration = 1; // Percepatan

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

      if (x + radius + speed > canvas.width || x - radius - speed < 0) {
        speed = -speed; // Mengubah arah bola saat mencapai dinding
        acceleration -= 1; // Mengurangi percepatan bola
      }

      x += speed;
      speed += acceleration;

      if (speed <= 0) {
        speed = 0; // Menghentikan bola jika kecepatan sudah mencapai nol
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};



