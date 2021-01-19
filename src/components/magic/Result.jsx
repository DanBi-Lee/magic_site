import React from 'react';
import { BGM_magic, SE_result } from '../../js/sound';

function Result ({styles, number, setNumber, setScreen, playButtonSE}) {
  const reset = () => {
    setScreen(()=>0); 
    setNumber(()=>0);
    playButtonSE();
  }
  BGM_magic.stop();
  SE_result.play();

  return (
    <>
      <div className={styles.contents}>
        <p>
          당신이 생각한 숫자는
          <span> {number===0? 32 : number} </span>
          입니다.
        </p>
      </div>
      <button className="button" onClick={reset}>
        다시하기 <i className="fas fa-redo-alt"></i>
      </button>
    </>
  );
}

export default Result;