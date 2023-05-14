import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import Sketch from 'react-p5';

export default function Graphics(props) {
    const {width, height, xPos, yPos} = props;


    const draw = p5 => {
        p5.clear();

        p5.background(255,255,255);
        

        p5.stroke(32, 111, 153);
        p5.fill(255,255,255)
        p5.circle(xPos, height - yPos, 100, 100)


        p5.stroke(217, 85, 24)
        p5.line(xPos, height - yPos, xPos - 60, height - 50)


        p5.stroke(24, 217, 43)
        p5.line(xPos, height - yPos, 101, height - 120)



        p5.stroke(217, 24, 211)
        p5.line(xPos, height - yPos, xPos + 50, height - yPos)



        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(0, 0, 20, height)


        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(width - 20, 0, 20, height)

        p5.fill(118,181,197)
        p5.stroke(118,181,197)
        p5.rect(0, 0, width, 20)

        p5.fill(226,135,67)
        p5.stroke(226,135,67)
        p5.rect(0, height - 20, width, 20)


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
