import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

export default function Graphics(props) {
    const {width, height, xPos, yPos} = props;


    const draw = p5 => {
            // p5.clear();

        p5.background(255,255,255);
        

        p5.stroke(255, 204, 204);
        p5.fill(255, 204, 204)
        p5.circle(xPos, height - yPos, 100 )





        p5.stroke(51, 51, 255)
        p5.line(xPos, height - yPos, (xPos - width) + 1000, (height - yPos) + 50)

        p5.stroke(51, 51, 255)
        p5.line(xPos, height - yPos, xPos  , (height - yPos)  - 50)

        p5.stroke(0, 255, 0)
        p5.line(xPos, height - yPos, xPos - 50 , (height - yPos) )

        p5.stroke(0, 255, 0)
        p5.line(xPos, height - yPos, (xPos - height) + 650, (height - yPos))

 



        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(0, 0, 5, height)


        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(width - 5, 0, 20, height)

        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(0, 0, width, 5)

        p5.fill(226,135,67)
        p5.stroke(226,135,67)
        p5.rect(0, height - 1, width, 20)


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
