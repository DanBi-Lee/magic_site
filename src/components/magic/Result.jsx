import React from 'react';

function Result ({styles, number, setScreen}) {
  return (
    <>
      <div className={styles.contents}>
        <p>
          당신이 생각한 숫자는
          <span> {number===0? 32 : number} </span>
          입니다.
        </p>
      </div>
      <button className="button" onClick={()=>{setScreen(()=>0)}}>
        다시하기 <i className="fas fa-redo-alt"></i>
      </button>
    </>
  );
}

export default Result;