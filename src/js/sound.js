import bgm from '../sound/my_mistake.mp3';
import btn from '../sound/button.mp3';
import result_bgm from '../sound/magic.mp3';

class Music {
    constructor(src, isLoop=false){
        this.audio = new Audio(src); 
        this.audio.loop = isLoop;
    }

    play(){
        this.audio.currentTime = 0;
        this.audio.play();
    }

    stop(){
        this.audio.pause();
    }
}

export const BGM_magic = new Music(bgm, true);
export const SE_btn = new Music(btn);
export const SE_result = new Music(result_bgm);