import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

export default function Graphics(props) {
  let { xPos, velocity, acceleration, width, height, yPos, r, hasDownBounce, rotate } = props;

  let xspeed = velocity;
  let yspeed = velocity;


  // const verticalBouncing = () => {
  //   if (yPos != height - r || yspeed != 0) {
  //     yPos -= yspeed;
  //     if (yPos > height - r || yPos < r) {
  //       yPos = Math.max(0, Math.min(yPos, height - r));
  //       yspeed *= -1;
  //       yspeed *= 0.8;
  //     }

  //     yspeed++;
  //   }
  // }

  // const horizontalBouncing = () => {
  //   if (xspeed != 0) {
  //     xPos += xspeed;
  //     if (xPos < 0 || xPos > width - r) {
  //       xspeed = -xspeed;
  //       acceleration = -acceleration;
  //       xPos = Math.max(0, Math.min(xPos, width - r));
  //     }

  //     xspeed -= acceleration;
  //   }

  // }





  const drawBall = (p5) => {
    p5.stroke(255, 204, 204);
    p5.fill(255, 204, 204)
    p5.circle(xPos, height - yPos, r)
    


    // // garis ungu
    // p5.stroke(0, 0, 0)
    // p5.line(xPos, height - yPos - r/2, (xPos - width) + 1000, height - yPos + r/2)

    // // garis putih
    // p5.stroke(51, 51, 255)
    // p5.line(xPos - r / 2, (height - yPos),(xPos -width) + 1000 + r/2 , (height - yPos) )
  }

  let pX = xPos;
  let pY = height - yPos;
  let angle = 0;


  const rotateObject = (p5) => {
 
    
    p5.rotate(angle * Math.pi);
    angle -= rotate;

    p5.stroke(0, 0,0)
    p5.line(xPos - r / 2 * Math.cos(angle), pY + r / 2 * Math.sin(angle), (xPos - width) + 1000 + r / 2 * Math.cos(angle), pY - r/2 * Math.sin(angle));

  
    // garis putih
    // p5.stroke(51, 51, 255)
    // p5.line(0, 0, (pX - r / 2 * Math.cos(angle)), pY - r / 2 * Math.sin(angle));

   
   
  }


  const draw = p5 => {
    p5.clear();
    p5.smooth();
    

    p5.background(255, 255, 255);

    p5.frameRate(30);
 

    drawBall(p5);

    rotateObject(p5);

    // // pembatas kanvas kiri
    // p5.fill(118, 181, 197)
    // p5.stroke(118, 181, 197)
    // p5.rect(0, 0, 5, height)

    // // pembatas kanvas kanan
    // p5.fill(118, 181, 197)
    // p5.stroke(118, 181, 197)
    // p5.rect(width - 5, 0, 20, height)

    // // pembatas kanvas atas
    // p5.fill(118, 181, 197)
    // p5.stroke(118, 181, 197)
    // p5.rect(0, 0, width, 5)

    // // pembatas kanvas bawah
    // p5.fill(226, 135, 67)
    // p5.stroke(226, 135, 67)
    // p5.rect(0, height - 1, width, 20)


    // if (!hasDownBounce) {
    //   horizontalBouncing();
    // }

    // if (hasDownBounce) {
    //   verticalBouncing();
    // }


  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  }


  return (
    <Sketch setup={setup} draw={draw} />
  )

}

Graphics.propType = {
  height: propType.number,
  width: propType.number,
}
