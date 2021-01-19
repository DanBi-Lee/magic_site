import React, { useState } from 'react';
import Step from './Step';
import ReadyScreen from './ReadyScreen';
import styles from './Magic.module.css';
import NumberSelection from './NumberSelection';
import Logo from './Logo';
import Result from './Result';
import { SE_btn } from '../../js/sound';

function Magic () {
  let state = useState('');

  const screen_list = [
    'ReadyScreen',
    'NumberSelection',
    'Step1',
    'Step2',
    'Step3',
    'Step4',
    'Step5',
    'Result'
  ];
  const [number, setNumber] = useState(0);
  const [screen, setScreen] = useState(0);
  const playButtonSE = () => {
    SE_btn.play();
  }
  const onClick = () => {
    setScreen(()=> screen+1);
    playButtonSE()
  }
  const switchJSX = (screen) => {
    switch(screen_list[screen]){
      case screen_list[0]:
        state.current = 'ready';
        return <ReadyScreen styles={styles} onClick={onClick} />
      case screen_list[1] :
        state.current = 'numberSelection';
        return <NumberSelection styles={styles} onClick={onClick} />
      case screen_list[2] :
      case screen_list[3] :  
      case screen_list[4] : 
      case screen_list[5] :
      case screen_list[6] :  
        state.current = 'step';
        return <Step styles={styles} onClick={onClick} step={screen-1} number={number} setNumber={setNumber} state={state.current} />
      case screen_list[7] : 
        return <Result styles={styles} number={number}  setNumber={setNumber} setScreen={setScreen} playButtonSE={playButtonSE} />
      default:
        throw Error('정의되지 않은 step');
    }
  }
  return (
      <div>
        <Logo styles={styles} />
        {switchJSX(screen)}
      </div>
  );
}

export default Magic;