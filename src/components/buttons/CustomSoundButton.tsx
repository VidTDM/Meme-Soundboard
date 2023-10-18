import { useRef } from "react";
import { db } from "../../db";

interface Props {
    id: string;
    text: string;
    soundData: string;
    img?: string;
}

export default function SoundButton({ id, text, soundData, img }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    function playAudio() {
        if (!audioRef.current) return;
        audioRef.current.play();
    }
    function onRightClick(e: React.MouseEvent) {
        e.preventDefault();
        if (!buttonRef.current) return;

        db.sounds.delete(buttonRef.current.id);
    }
    return (
        <>
            <audio src={soundData} ref={audioRef}></audio>
            <button
                id={id}
                ref={buttonRef}
                type="button"
                onClick={playAudio}
                className="sound secondary"
                onContextMenu={onRightClick}
            >
                {img ? <img src={img} alt={img} /> : ""}
                {text}
            </button>
        </>
    );
}
