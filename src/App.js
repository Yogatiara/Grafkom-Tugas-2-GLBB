import React, { useEffect, useState, useRef } from 'react';
import './App.css';

import Graphic from './components/Graphic';
import Slider from './components/Slider';
import ClearButton from './components/ClearButton';
import RecordButton from './components/RecordButton';

function App() {
  const CANVAS_WIDTH = 1000;
  const CANVAS_HEIGHT = 600;


  const [acceleration, setAcceleration] = useState(1);
  const [velocity, setVelocity] = useState(20);
  const [horizontalPos, setHorizontalPos] = useState(100);
  const [verticalPos, setVerticalPos] = useState(50);
  const [radius, setRadius] = useState(100);


  const [hasXToRightMove, setHasXToRightMove] = useState(false);
  const [hasXToLeftMove, setHasXToLeftMove] = useState(false);
  const [hasDownBounce, setHasDownBounce] = useState(false);


  const handleOnNextButtonClick = () => {
    if(horizontalPos + velocity > CANVAS_WIDTH - radius * 2 || horizontalPos < radius) {
      setHorizontalPos(horizontalPos - velocity)
      setHasXToRightMove(true);
    } else {
      setHorizontalPos(horizontalPos + velocity)
      setHasXToRightMove(true);

    }
  }

  const handleOnPrevButtonClick = () => {
    if(horizontalPos - velocity < CANVAS_WIDTH - radius * 2 || horizontalPos > radius) {
      setHorizontalPos(horizontalPos + velocity)
    } else {
      setHorizontalPos(-(horizontalPos - velocity))
    }
  }

  const handleOnYPosChange = (e) => {
    setVerticalPos(e.target.value);
  }

  const handleDownBounce = () => {
    setHasDownBounce(!hasDownBounce);
  }



  return (
    <div className="min-h-[100vh] bg-sky-100">
      <div className='flex justify-center items-start'>
        <div className="m-10 drop-shadow-lg">
            <div className='p-6 bg-slate-100'>
              <Graphic width={CANVAS_WIDTH} height={CANVAS_HEIGHT} xPos={horizontalPos} yPos={verticalPos} velocity={velocity} acceleration={acceleration} r={radius} hasDownBounce={hasDownBounce} hasXToRightMove={hasXToRightMove} hasXToLeftMove={hasXToLeftMove} setHasXToLeftMove={setHasXToLeftMove} setHasXToRightMove={setHasXToRightMove} />
            
            </div>

            <div className='p-6 bg-slate-100 flex justify-between'>
              <div></div>
              <div className='flex'>
                  <div class="flex justify-center items-center rotate-180">   
                    <button class="w-20 h-20 rounded-full bg-blue-500 focus:outline-none flex justify-center items-center" onClick={handleOnPrevButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" fill='#fff'/> </svg>
                    </button>
                  </div>
                  <div class="flex justify-center items-center mx-3">   
                    <input type="number" className="ml-3 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center text-[2rem]" value={velocity} onChange={(e) => setVelocity(e.target.value)}  />
                  </div>
                  <div class="flex justify-center items-center">   
                    <button class="w-20 h-20 rounded-full bg-blue-500 focus:outline-none flex justify-center items-center" onClick={handleOnNextButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" fill='#fff'/> </svg>
                    </button>
                  </div>
              </div>
              <div>
              <div class="flex justify-center items-center">   
                    <button class={"w-20 h-20 rounded-full bg-yellow-600 focus:outline-none flex justify-center items-center " + (hasDownBounce && "bg-yellow-800 drop-shadow-2xl")}onClick={handleDownBounce}>
                    <svg width="50" height="50" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5C21 6.10457 20.1046 7 19 7Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 15.5C7 14.5 9.5 15 12 20C12.5 17 14 12.5 15.5 10" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                    </button>
                  </div>
              </div>
            </div>
        </div>

        <div className='bg-white rounded-lg drop-shadow-lg m-10 p-12' >
          <div>
            <Slider 
              title="Percepatan (m/s^2)"
              maxValue={10} 
              defaultValue={acceleration} 
              onChange={(e) => setAcceleration(e.target.value)}
            />

            <Slider 
              title="Kecepatan (m/s)"
              maxValue={1000} 
              defaultValue={velocity} 
              onChange={(e) => setVelocity(e.target.value)}
            />
          </div>


          <div className='flex justify-between mt-8'>
              <Slider 
                title="Posisi Horizontal"
                maxValue={950} 
                minValue={50}
                defaultValue={horizontalPos} 
                onChange={(e) => setHorizontalPos(e.target.value)}
              />
              <Slider 
                title="Posisi Vertikal"
                maxValue={550}
                minValue={50}
                defaultValue={verticalPos} 
                onChange={(e) => handleOnYPosChange(e)}
              />
          </div>

        {/* input ukuran objek dan jarak objek */}
        <div className='rounded-lg drop-shadow-xl'>
          <div className=' pt-10 pb-10'>
              <div className="flex justify-between mb-9">
                <label for="" className=" pt-3 text-sm font-medium text-gray-900 dark:text-white">Percepatan (m/s^2) : </label>
                <input type="number" id="" className="ml-3 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                max={CANVAS_HEIGHT / 2} value={acceleration}  onChange={(e) => setAcceleration(e.target.value)} required/>
              </div>
              <div className="flex justify-between mb-9">
                <label for="" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Kecepatan (m/s) : </label>
                <input  type="number" id="" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" max={CANVAS_WIDTH / 2} value={velocity}  onChange={(e) => setVelocity(e.target.value)} required/>
              </div>
              <div className="flex justify-between mb-9">
                <label for="" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Posisi Horizontal : </label>
                <input type="number" id="" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={horizontalPos} onChange={(e) => setHorizontalPos(e.target.value)}  max={150} required/>
              </div>

              <div className="flex justify-between mb-9">
                <label for="" className="pt-3 text-sm font-medium text-gray-900 dark:text-white">Posisi Vertikal : </label>
                <input type="number" id="" className="ml-6 bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={verticalPos} max={150}  onChange={(e) => handleOnYPosChange(e)}  required/>
              </div>

              <hr className='mb-12' />



            <ClearButton />
            <RecordButton />
          
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
