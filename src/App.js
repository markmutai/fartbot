import { useState } from 'react';
import { Helmet } from "react-helmet";
// import logo from './logo.svg';
import './App.css';
import { Images } from './assets/img';

import wetShortBold from './assets/farts/human_wet_short_bold_fart.mp3';
import wetDribblePoop from './assets/farts/human_fart_wet_dribbly_poop.mp3';
import wetSquelchy from './assets/farts/human_fart_long_very_wet_squelchy_bubbles.mp3';
import wetSquelchy2 from './assets/farts/human_fart_long_very_wet_squelchy_bubbles_2.mp3';
import airySteady from './assets/farts/human_fart_airy_steady.mp3';
import laughster from './assets/farts/laughtster.mp3';
import wetAccident from './assets/farts/wet_accident.mp3';
import silentFartSquelch from './assets/farts/silent_fart_squelch.mp3';

function App() {
  const [squeeze, setSqueeze] = useState(false);
  let audio1 = new Audio(`${wetShortBold}`);
  let audio2 = new Audio(`${wetDribblePoop}`);
  let audio3 = new Audio(`${wetSquelchy}`);
  let audio4 = new Audio(`${wetSquelchy2}`);
  let audio5 = new Audio(`${airySteady}`);
  let audio6 = new Audio(`${laughster}`);
  let audio7 = new Audio(`${wetAccident}`);
  let audio8 = new Audio(`${silentFartSquelch}`);

  const start1 = () => {
    audio1.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 1200)
    return
  }

  const start2 = () => {
    audio2.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 1600)
    return
  }

  const start3 = () => {
    audio3.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 3000)
    return
  }

  const start4 = () => {
    audio4.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 2900)
    return
  }

  const start5 = () => {
    audio5.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 1500)
    return
  }

  const start6 = () => {
    audio6.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 2000)
    return
  }

  const start7 = () => {
    audio7.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 1000)
    return
  }

  const start8 = () => {
    audio8.play()
    setSqueeze(true)
    setTimeout(() => {
      setSqueeze(false)
      return
    }, 1800)
    return
  }

  const btnStyling = `relative transition-all duration-[350ms] txtShadowNone hover:txtShadowNone px-[2.5rem] xl:px-[2rem] py-[1.25rem] md:text-[1rem] 2xl:text-[1.45rem] lowercase text-lime-950/90 bg-lime-500 border-b-[4.5px] border-lime-800/70 hover:border-sky-900/90 kalam rounded-[5px] hover:bg-sky-500 hover:text-white shadow-xl overflow-hidden hover:scale-[1.08]`

  const btnShine = `absolute top-0 left-0 w-full bg-white/30 h-[3.5px] blur-[0.5px]`

  return (
    <div className="App">
      <Helmet>
        <title>Fartbot</title>
        <meta
          name="description"
          content="The world's fartiest robot"
        />
        <meta
          name="keywords"
          content="robot, fart, fart robot, farts"
        />
        <meta
          name="author"
          content="Designed by Mutai"
        />
      </Helmet>
      <div className='flex items-center justify-center w-screen h-screen bg-gradient-radial from-slate-700 via-slate-900 to-black/95'>
        <div className="fixed top-0 left-0 w-full h-full bg-repeat bg-ptn bg-size-[300px] mix-blend-overlay ptnToilet opacity-30 -z-1" />
        <div className='flex flex-col justify-center items-center xsm:w-[full] md:w-[80%] xl:w-[70%] h-[92%] min-h-[30rem] xsm:-mt-10 md:-mt-20 2xl:-mt-10 z-10'>
          <div className="w-full mb-4 text-white xsm:text-base 2xl:text-xl">
            <h1 className='marker text-[5rem] titleShadow'><strong>FartBot</strong></h1>
            <div className='relative xsm:tracking-[4px] xl:tracking-[8px] 2xl:tracking-[15px] z-30'>
              <h2 className='relative jost -mt-[0.75rem] xsm:text-[0.8rem] 2xl:text-[0.825rem] z-20 uppercase font-bold'>by Tuma</h2>
              <p className='relative jost xsm:text-[0.75rem] 2xl:text-[0.8rem] tracking-[4px] opacity-90 mt-[0.25rem] z-10'>2.0</p>
            </div>
          </div>
          <div className='flex items-center justify-center xsm:w-[16rem] xsm:h-[16rem] xl:w-[18rem] xl:h-[18rem] 2xl:w-[20rem] 2xl:h-[20rem] p-[8px] bg-gradient-to-b from-white/30 via-white/10 to-white/0 mt-[1rem] rounded-full'>
            <div className="robotWindow relative flex flex-col items-center overflow-hidden w-full h-full xsm:p-4 xl:p-6 2xl:p-8 bg-gradient-to-tr from-sky-400/80 via-sky-700/80 to-sky-800/90 xsm:border-[2px] xl:border-[4px] border-white/70 outline outline-[2px] outline-white/20 outline-offset-[8px] rounded-full shadow-2xl">
              {/* <div className="w-full h-full bg-red-400"></div> */}
              {/* <div className="robotWindow xsm:w-[16rem] xsm:h-[16rem] xl:w-[18rem] xl:h-[18rem] 2xl:w-[24rem] 2xl:h-[24rem] mx-auto my-auto"></div> */}
              {squeeze === false ?
                <>
                  <img
                    src={Images.fartbotWink}
                    alt="FartBot"
                    className='relative z-50 w-full mt-2 fartRobot animate-bounce mix-blend-overlay'
                  />
                </>
                :
                <>
                  <img
                    src={Images.fartbotSqueeze}
                    alt="FartBot"
                    className='relative z-50 w-full mt-2 fartRobot shake mix-blend-overlay'
                  />
                </>
              }
              <div className={`circShadow rounded-[50%] -mt-[1.7rem] blur-[1.5px] ${squeeze === false ? 'shadowBounce' : 'w-[8rem] h-[8px] bg-black/30'}`} />
            </div>
          </div>
          <div className="grid grid-rows-1 grid-cols-12 items-center px-[10rem] mt-10 mb-[1.5rem] xsm:text-[0.75rem] 2xl:text-[0.85rem] text-white jost uppercase xsm:tracking-[2px] xl:tracking-[3px] 2xl:tracking-[4px] w-full">
            <hr className='col-span-4 opacity-30 border-dashed border-[1.5px]' />
            <h2 className='col-span-4'><strong>Select A Fart</strong></h2>
            <hr className='col-span-4 opacity-30 border-dashed border-[1.5px]' />
          </div>
          <div className="grid grid-cols-12 w-full gap-x-[20px] gap-y-[20px] mt-[1rem] px-[2rem] 2xl:px-[10rem]">
            <button
              onClick={start1}
              className={`col-span-6 xl:col-span-3  ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Wet Short 'n Bold
            </button>
            <button
              onClick={start2}
              className={`col-span-6 xl:col-span-3  ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Wet Dribble
            </button>
            <button
              onClick={start7}
              className={`col-span-6 xl:col-span-3  ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Wet Accident
            </button>
            <button
              onClick={start3}
              className={`col-span-6 xl:col-span-3  ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Wet Squelchy
            </button>
            <button
              onClick={start4}
              className={`col-span-6 xl:col-span-3  ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Wet Squelchy Rmx
            </button>
            <button
              onClick={start5}
              className={`col-span-6 xl:col-span-3  ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Air Steady
            </button>
            <button
              onClick={start6}
              className={`col-span-6 xl:col-span-3  ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Laughster
            </button>
            <button
              onClick={start8}
              className={`col-span-6 xl:col-span-3 ${btnStyling}`}>
              <div className={`${btnShine}`} />
              Silent But Deadly
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
