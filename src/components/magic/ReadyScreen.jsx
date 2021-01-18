import React from 'react';

function ReadyScreen({styles, onClick}) {
    return (
        <>
            <div className={styles.contents}>
                <p className={styles.title}>
                    마법의 수정구슬
            </p>
                <p>
                    당신의 마음을 읽어드립니다!
            </p>
            </div>
            <button className="button" onClick={onClick}>
                다음으로
            </button>
        </>
    );
}

export default ReadyScreen;