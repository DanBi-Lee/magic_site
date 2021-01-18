import React from 'react';

function Result ({styles, number, setNumber, setScreen}) {
  const reset = () => {
    setScreen(()=>0); 
    setNumber(()=>0);
  }

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