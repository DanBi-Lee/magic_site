import React from 'react';

function NumberSelection ({styles, onClick}) {
  return (
    <>
        <div className={styles.contents}>
          <p>
              1~32 사이에서<br />원하는 숫자를 마음속으로 떠올리세요.
          </p>
        </div>
        <button className="button" onClick={onClick}>
            다음으로
        </button>
    </>
  );
}

export default NumberSelection;