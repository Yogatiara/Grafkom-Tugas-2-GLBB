import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

export default function Graphics(props) {
    const {width, height, yPos} = props;
    let {xPos, velocity} = props;


    const radius = 100;
    const rightBound = width - radius;


    // TEST
    // let x = 320;
    // let y = 180;
    let xspeed = 100;
    let counter = xspeed;
    let r = 50;
    // const [xSpeed, setXSpeed] = useState(100);



    const draw = p5 => {
        p5.clear();

        p5.background(255,255,255);
        
        // p5.stroke(255, 204, 204);
        // p5.fill(255, 204, 204)
        // p5.circle(xPos, height - yPos, 100)

        // // garis ungu bawah
        // p5.stroke(51, 51, 255)
        // p5.line(xPos, height - yPos, (xPos - width) + 1000, (height - yPos) + 50)

        // // garis ungu atas
        // p5.stroke(51, 51, 255)
        // p5.line(xPos, height - yPos, xPos  , (height - yPos)  - 50)

        // // garis hijau kiri
        // p5.stroke(0, 255, 0)
        // p5.line(xPos, height - yPos, xPos - 50 , (height - yPos) )

        // // garis hijau kanan
        // p5.stroke(0, 255, 0)
        // p5.line(xPos, height - yPos, (xPos - height) + 650, (height - yPos))

       

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


        // TEST
        // p5.background(0);

        p5.frameRate(30);

        p5.ellipse(xPos, height - yPos, r*2, r*2);
        xPos += xspeed;
        counter -= 1;
        if (xPos > width - r * 2 || xPos < r * 2) {
          xspeed = -xspeed;
        
        }

        if(counter === 0) {
            xspeed = 0;
        }
        
        p5.ellipse(xPos, height - yPos, r*2, r*2);

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
