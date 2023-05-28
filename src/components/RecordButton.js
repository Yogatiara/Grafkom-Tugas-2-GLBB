import React from 'react'

export default function RecordButton() {
  return (
    <div className="flex justify-center items-center absolute right-20">   
        <button className="w-16 h-16 rounded-full bg-lime-700 focus:outline-none flex justify-center items-center">
        <svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 256C288 291.3 259.3 320 224 320C188.7 320 160 291.3 160 256C160 220.7 188.7 192 224 192C259.3 192 288 220.7 288 256zM544 416C561.7 416 576 430.3 576 448C576 465.7 561.7 480 544 480H224C100.3 480 0 379.7 0 256C0 132.3 100.3 32 224 32C347.7 32 448 132.3 448 256C448 318.7 422.3 375.3 380.8 416H544zM224 352C277 352 320 309 320 256C320 202.1 277 160 224 160C170.1 160 128 202.1 128 256C128 309 170.1 352 224 352z" fill='#fff'/></svg>
    </button>
    </div>
  )
}
