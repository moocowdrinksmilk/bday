import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import * as cat from './assets/56906-cat-in-box.json'
import * as confetti from './assets/confetti.json'

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cat.default,
  };
  const defaultOptionsCon = {
    loop: true,
    autoplay: true,
    animationData: confetti.default,
  };
  return (
    <div className="h-screen w-screen bg-red-100 flex items-center justify-center relative">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
      <Lottie
            
            options={defaultOptionsCon} />
      </div>
      <div>
        <div className="flex">
          <Lottie
            height={400}
            width={400}
            options={defaultOptionsCon} />
          <Lottie options={defaultOptions}
            height={400}
            width={400} />
          <Lottie
            height={400}
            width={400}
            options={defaultOptionsCon} />
        </div>
      </div>
    </div>
  );
}

export default App;
