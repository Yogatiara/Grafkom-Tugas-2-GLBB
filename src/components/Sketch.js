import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const AntiAliasingSketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let resolution = 8; // Beban efek anti-aliasing (contoh: 8x)
      let canvasWidth = 640; // Resolusi semula
      let canvasHeight = 480;
      let increasedWidth = canvasWidth * resolution; // Resolusi ditingkatkan
      let increasedHeight = canvasHeight * resolution;
      let circleSize = 100;

      p.setup = () => {
        const canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(canvasRef.current);
        p.pixelDensity(1); // Menyesuaikan resolusi piksel dengan 1

        // Menggambar lingkaran pada kanvas yang diperbesar
        p.loadPixels();
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
                  r += p.pixels[idx2];
                  g += p.pixels[idx2 + 1];
                  b += p.pixels[idx2 + 2];
                  count++;
                }
              }
            }

            // Menghitung nilai rata-rata warna
            r = Math.floor(r / count);
            g = Math.floor(g / count);
            b = Math.floor(b / count);

            p.pixels[idx] = r;
            p.pixels[idx + 1] = g;
            p.pixels[idx + 2] = b;
            p.pixels[idx + 3] = 255;
          }
        }
        p.updatePixels();
      };

      p.draw = () => {
        // Gambar lingkaran pada resolusi semula
        p.background(220);
        p.fill(255, 0, 0);
        p.circle(canvasWidth / 2, canvasHeight / 2, circleSize);
      };
    };

    const p5Canvas = new p5(sketch);

    // Cleanup p5.js canvas when component unmounts
    return () => {
      p5Canvas.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default AntiAliasingSketch;
