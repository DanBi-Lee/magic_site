import React, { useCallback, useMemo } from 'react';
import stepStyles from './Step.module.css';

function Step ({styles, onClick, step, number, setNumber}) {
  const numberDivision = (number) => {
    let lastNumber = 32;
    let numberList = [];
    for (lastNumber; lastNumber-1 >= 0; lastNumber--){
      let binaryNumber = lastNumber.toString(2);
      let length = binaryNumber.length;
      if(binaryNumber[length-number]==="1"){
        numberList.push(lastNumber);
      }
    }
    return numberList.reverse();
  }

  const stepNumber = useMemo(() => {
    const length = step;
    let stepNumber = '';
    for(let number = 0; number < length; number++){
      stepNumber = number === 0 ? stepNumber + '1' : stepNumber + '0';
    }
    stepNumber = parseInt(stepNumber, 2);
    return stepNumber;
  }, [step]);

  const guessNumber = useCallback((number, stepNumber) => {
    setNumber(()=>number+stepNumber);
  }, [setNumber]);

  return (
    <>
      <div className={styles.contents}>
        <p>
            {`${step}.`} 다음 숫자 중<br />당신이 고른 숫자가 있나요?
        </p>
        <ul className={stepStyles.numberList}>
          {
            numberDivision(step).map(item=><li key={item}>{item}</li>)
          }
        </ul>
      </div>
      <button className="button" onClick={()=>{onClick(); guessNumber(number, stepNumber);}} style={{marginRight : '16px'}} value={true}>
        있다
      </button>
      <button className="button" onClick={onClick} value={false}>
        없다
      </button>
    </>
  );
}

export default Step;