import React from 'react';
import logo from '../../images/logo.png';

function Logo ({styles}) {
  return (
    <h1 className={styles.logo}>
        <img src={logo} alt="로고"/>
    </h1>
  );
}

export default React.memo(Logo);