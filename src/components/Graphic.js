import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

export default function Graphics(props) {
    let {xPos, velocity, acceleration, width, height, yPos, r, hasDownBounce, hasXToRightMove, hasXToLeftMove, setHasXToRightMove, rotate, setVerticalPos} = props;


    let xspeed = velocity;
    let yspeed = velocity;


    // ANTI ALIASING
    let resolution = 1; // Beban efek anti-aliasing (contoh: 8x)
    let canvasWidth = width; // Resolusi semula
    let canvasHeight = height;
    let increasedWidth = canvasWidth * resolution; // Resolusi ditingkatkan
    let increasedHeight = canvasHeight * resolution;
  

    const verticalBouncing = () => {
         if(yPos != height - r / 2 || yspeed != 0) {
            yPos -= yspeed;
            if(yPos > height - r / 2 || yPos < r / 2) {
                yPos = Math.max(r / 2, Math.min(yPos, height - r / 2));
                yspeed *= -1;
                yspeed *= 0.8;
            }

            yspeed++;
        }
    }

    
  
    const horizontalBouncing = () => {
        if(xspeed != 0) {
            xPos += xspeed;
            if(xPos < 0 || xPos > width - r) {
                xspeed = -xspeed;
                acceleration = -acceleration;
                xPos = Math.max(r / 2, Math.min(xPos, width - r / 2));
            }

            xspeed -= acceleration;
        } else {
            // setHasXToRightMove(false);
        }

    }


  

    const drawBall = (p5, x, y) => {
      p5.fill("red")
      p5.stroke("black");
      p5.circle(x, height - y, r - (y * 0.1))
  }

    let pX = xPos;
    // let pY = height - yPos;
    let angle = 0;
    let angle1 = 0;
  

    const rotateObject = (p5, x, y) => {
      let pY = height - y;

      angle = rotate;
      angle1 =   rotate - 3.59;
  
      p5.stroke("black")
      p5.line(x - (r - (y * 0.1)) / 2 * Math.cos(2 + angle1), pY + (r - (y * 0.1)) / 2 * Math.sin(2 + angle1), (x - width) + 1000 + (r - (y * 0.1)) / 2 * Math.cos(2 + angle1), pY - (r - (y * 0.1)) / 2 * Math.sin(2 + angle1));
  
    
      p5.stroke("black")
      p5.line(x - (r - (y * 0.1)) / 2 * Math.cos(angle), pY + (r - (y * 0.1)) / 2 * Math.sin(angle), (x - width) + 1000 + (r - (y * 0.1)) / 2 * Math.cos(angle), pY - (r - (y * 0.1)) / 2 * Math.sin(angle));
     
    }

   
    const draw = p5 => {
        p5.clear();
        p5.smooth();

        p5.background(255,255,255);

        p5.frameRate(30);
        
        drawBall(p5, xPos, yPos)
        rotateObject(p5, xPos, yPos)

        // pembatas kanvas kiri
        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(0, 0, 5, height)

        // pembatas kanvas kanan
        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(width - 5, 0, 20, height)

        // pembatas kanvas atas
        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(0, 0, width, 5)

        // pembatas kanvas bawah
        p5.fill(226,135,67)
        p5.stroke(226,135,67)
        p5.rect(0, height - 1, width, 20)

    
        if(hasXToRightMove) {
            horizontalBouncing();
        } 

        if(hasXToLeftMove) {
            horizontalBouncing();
        }

        if(hasDownBounce) {
            verticalBouncing(p5);
        }


    }

    // setVerticalPos(yChange)

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.pixelDensity(1);

       // Menggambar lingkaran pada kanvas yang diperbesar
        p5.loadPixels();
        for (let y = 0; y < increasedHeight; y++) {
          for (let x = 0; x < increasedWidth; x++) {
            let idx = (x + y * increasedWidth) * 4;
            let r = 0;
            let g = 0;
            let b = 0;
            let count = 0;

            // Menggambar titik-titik di sekitar titik pada resolusi ditingkatkan
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                let newX = Math.floor(x / resolution) + dx;
                let newY = Math.floor(y / resolution) + dy;

                // Menghitung warna rata-rata dari pixel-pixel resolusi ditingkatkan
                if (
                  newX >= 0 &&
                  newX < canvasWidth &&
                  newY >= 0 &&
                  newY < canvasHeight
                ) {
                  let idx2 = (newX + newY * canvasWidth) * 4;
                  r += p5.pixels[idx2];
                  g += p5.pixels[idx2 + 1];
                  b += p5.pixels[idx2 + 2];
                  count++;
                }
              }
            }

            // Menghitung nilai rata-rata warna
            r = Math.floor(r / count);
            g = Math.floor(g / count);
            b = Math.floor(b / count);

            p5.pixels[idx] = r;
            p5.pixels[idx + 1] = g;
            p5.pixels[idx + 2] = b;
            p5.pixels[idx + 3] = 255;
          }
        }
        p5.updatePixels();
    }


    return (
        <Sketch setup={setup} draw={draw} />
  )

}

Graphics.propType = {
    height: propType.number,
    width: propType.number,
}
