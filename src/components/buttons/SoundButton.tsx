import { useRef } from "react";

interface Props {
    id: string;
    text: string;
    audioText: string;
    img?: string;
}

export default function SoundButton({ id, text, audioText, img }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    function playAudio() {
        if (!audioRef.current) return;
        audioRef.current.play();
    }
    return (
        <>
            <audio src={audioText} ref={audioRef}></audio>
            <button
                id={id}
                className="sound secondary"
                type="button"
                onClick={playAudio}
            >
                {img ? <img src={img} alt={img} /> : ""}
                {text}
            </button>
        </>
    );
}
