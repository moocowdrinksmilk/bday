import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import * as cat from './assets/56906-cat-in-box.json'
import * as confetti from './assets/confetti.json'
import * as loading from './assets/cat-preloader.json'
import * as catTail from './assets/cat-tail-wag.json'
import * as catTailBlack from './assets/cat-tail-black.json'
import moment from 'moment'
import { useEffect, useState } from 'react';

function App() {


  const [time, setTime] = useState("")
  const [confettiplay, setConfetti] = useState(true)

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: cat.default,
  };
  const defaultOptionsCon = {
    loop: true,
    autoplay: true,
    animationData: confetti.default,
  };

  const defaultOptionsCat = {
    loop: true,
    autoplay: true,
    animationData: catTail.default,
  };

  const defaultOptionsCatBlack = {
    loop: true,
    autoplay: true,
    animationData: catTailBlack.default,
  };

  const defaultOptionsLoading = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
  };

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format('MMMM Do YYYY, h:mm:ss a').toString())
    }, 100)
  }, [])

  if (!moment().isBefore(moment('2021-08-10'))) {
    return (
      <div className="bg-black w-screen h-screen flex justify-center items-center">

        <div>
          <Lottie
            options={defaultOptionsLoading} />
          <div className="text-white text-center">
            {time}
          </div>
        </div>

      </div>
    )
  }

  return (
    <div className="h-screen w-screen bg-red-100 flex items-center md:justify-center relative">
      { !confettiplay &&

      <>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-40">
            <Lottie
            options={defaultOptionsCon}
            isPaused={confettiplay} />
        </div>
        
        <div className="absolute top-0 right-0 hidden sm:block">
            <Lottie
            options={defaultOptionsCat}
            isPaused={confettiplay} />
        </div>

        <div className="absolute top-0 left-0 hidden sm:block">
            <Lottie
            options={defaultOptionsCatBlack}
            isPaused={confettiplay} />
        </div>
        
        </>
        }

      <div>
        {!confettiplay &&
          <>
            <h1 className="text-5xl text-center whitespace-normal w-screen">
              HAPPY BIRTHDAY
        </h1>
            <h1 className="text-5xl text-center whitespace-normal w-screen my-10">
              WU LI XIANG
        </h1>
          </>
        }


        <div className="justify-center relative">

          {
            confettiplay &&
            <div className="absolute top-0 right-0 bottom-0 left-0 left-0 z-20 text-center mt-20"
              onClick={() => setConfetti(false)}>
              Click on the box!!
          </div>
          }

          {/* <Lottie
            height={400}
            width={400}
            options={defaultOptionsCon} /> */}
          <Lottie options={defaultOptions}
          height={400}
            isPaused={confettiplay} />
          {/* <Lottie
            height={400}
            width={400}
            options={defaultOptionsCon} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
