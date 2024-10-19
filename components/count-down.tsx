//  "use client"

// import { useState,useRef,useEffect,ChangeEvent, use } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { clear } from "console";
// import { clearInterval } from "timers";

// export default function countdown (){
//     const[duration,setDuaration] = useState <number | string>("");
//     const[timerleft,setTimeleft] = useState <number>(0);
//     const[isActive,setIsActive] = useState <boolean>(false);
//     const[ispaused, setIspaused] = useState <boolean>(false);
//     const timerRef = useRef<NodeJS.Timeout | null>(null);


//     const handleSetDuration = (): void => {
//      if(typeof duration === "number" && duration >0){
//         setTimeleft (duration)  
//         setIsActive(false)
//         setIspaused(false)  
//          if(timerRef.current){
//             clearInterval(timerRef.current)
//          };
//     };

//     };

//     const handleStart = (): void => {
//        if(timerleft > 0){
//          setIsActive (true);
//          setIspaused(false);
//        };
//     };

//      const handlePaused = (): void => {
//         if(isActive){
//         setIspaused(true);
//         setIsActive(false);
//         if(timerRef.current){
//             clearInterval(timerRef.current)
//         }
//         }
//      };
      
//      const handleRestart = (): void =>{
//       setIsActive(true);
//       setIspaused(true);
//       setTimeleft(typeof duration ==="number"? duration : 0);
//       if(timerRef.current){
//         clearInterval(timerRef.current)
//       }

//      };

//      useEffect(() => {
//       if( isActive && !ispaused){
//          timerRef.current = setInterval(()=>{
//          setTimeleft((prevTime) => {
//             if(prevTime <=1){
//              clearInterval(timerRef.current!);
//             } return  0;
//              return prevTime -1;
//          });

//          }),1000;  

//       }
//       return() =>{
//        if(timerRef.current){
//          clearInterval(timerRef.current)
//        };
          
//       } 

//      }, [isActive,ispaused]);
     
//     const formatTime = (time: number): string => {
//     const minute = Math.floor(time/60);
//     const second = time % 60;
//     return `${String(minute).padStart (2 ,"0"  )};
//            ${String(second).padStart (2 ,"0"  )}`;
    
//     };


//     const handleSetDurationChange =(e: ChangeEvent<HTMLInputElement>):void=>{
//       setDuaration(Number(e.target.value) || "");
//     };
    

//  }
// "use client";

// import { useState, useRef, useEffect, ChangeEvent } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function Countdown() {
//   const [duration, setDuration] = useState<number | string>("");
//   const [timeLeft, setTimeLeft] = useState<number>(0);
//   const [isActive, setIsActive] = useState<boolean>(false);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   // Set duration function
//   const handleSetDuration = (): void => {
//     if (typeof duration === "number" && duration > 0) {
//       setTimeLeft(duration);
//       setIsActive(false);
//       setIsPaused(false);
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     }
//   };

//   // Start the timer
//   const handleStart = (): void => {
//     if (timeLeft > 0) {
//       setIsActive(true);
//       setIsPaused(false);
//     }
//   };

//   // Pause the timer
//   const handlePause = (): void => {
//     if (isActive) {
//       setIsPaused(true);
//       setIsActive(false);
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     }
//   };

//   // Restart the timer
//   const handleRestart = (): void => {
//     setIsActive(true);
//     setIsPaused(false);
//     setTimeLeft(typeof duration === "number" ? duration : 0);
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   };

//   // Timer countdown effect
//   useEffect(() => {
//     if (isActive && !isPaused) {
//       timerRef.current = setInterval(() => {
//         setTimeLeft((prevTime) => {
//           if (prevTime <= 1) {
//             clearInterval(timerRef.current!);
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     }

//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, [isActive, isPaused]);

//   // Format time to MM:SS
//   const formatTime = (time: number): string => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
//   };

//   // Handle input change for setting duration
//   const handleSetDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setDuration(Number(e.target.value) || "");
//   };

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
//       <Input
//         type="number"
//         value={duration}
//         onChange={handleSetDurationChange}
//         placeholder="Enter time in seconds"
//         className="mb-4 p-2 border border-gray-300 rounded"
//       />
//       <Button
//         onClick={handleSetDuration}
//         className="mb-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Set Duration
//       </Button>
//       <div className="text-4xl font-mono mb-4">{formatTime(timeLeft)}</div>
//       <div className="flex space-x-2">
//         <Button
//           onClick={handleStart}
//           disabled={isActive || timeLeft === 0}
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Start
//         </Button>
//         <Button
//           onClick={handlePause}
//           disabled={!isActive}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
//         >
//           Pause
//         </Button>
//         <Button
//           onClick={handleRestart}
//           disabled={timeLeft === 0}
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//         >
//           Restart
//         </Button>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Countdown() {
  const [duration, setDuration] = useState<number | string>(""); // Fixed typo here
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Set duration function
  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
      setIsPaused(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Start the timer
  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  // Pause the timer
  const handlePause = (): void => {
    if (isActive) {
      setIsPaused(true);
      setIsActive(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Restart the timer
  const handleRestart = (): void => {
    setIsActive(true);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Timer countdown effect
  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isPaused]);

  // Format time to MM:SS
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Handle input change for setting duration
  const handleSetDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || "");
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <Input
        type="number"
        value={duration}
        onChange={handleSetDurationChange}
        placeholder="Enter time in seconds"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <Button
        onClick={handleSetDuration}
        className="mb-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Set Duration
      </Button>
      <div className="text-4xl font-mono mb-4">{formatTime(timeLeft)}</div>
      <div className="flex space-x-2">
        <Button
          onClick={handleStart}
          disabled={isActive || timeLeft === 0}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Start
        </Button>
        <Button
          onClick={handlePause}
          disabled={!isActive}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Pause
        </Button>
        <Button
          onClick={handleRestart}
          disabled={timeLeft === 0}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Restart
        </Button>
      </div>
    </div>
  );
}
