
import Sketch from 'react-p5';


const Midpoint = (x0, y0, d, p5) => {
  let x = 0;
  let y = d/2;
  let decision = 1 - (d/2);
  let xPlot = 0;
  let yPlot = 0;

  while (xPlot == yPlot) {
    x++;
    if (decision < 0 ) {
      xPlot =+ x;
      yPlot = y;                                            
    } else if (decision >= 0) {
      y--;
      xPlot =+ x;
      yPlot = y
    };
  }




}

export default Midpoint;