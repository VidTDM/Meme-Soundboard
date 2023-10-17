import { useState, useRef, useMemo } from "react";
import useDidMount from '../utils/useDidMount';
import SoundButton from "./buttons/SoundButton";
import AddNewSoundButton from "./buttons/AddNewSoundButton";
import sounds from "../data/sounds";

interface MainProps {}

export interface Sound {
    id: string;
    text: string;
    soundData: any;
}

export default function Main({}: MainProps) {
    const [customSounds, setCustomSounds] = useState<Array<Sound>>([]);
    const [query, setQuery] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const filteredSounds = useMemo(() => {
        return sounds.filter((sound) => {
            return sound.text.toLowerCase().includes(query.toLowerCase());
        });
    }, [query]);
    useDidMount(() => {});
    return (
        <>
            <div className="search-box">
                <input
                    type="search"
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="🔍 Type to search..."
                />
            </div>
            <div className="buttonList">
                {filteredSounds.map((sound, i) => {
                    return (
                        <SoundButton
                            key={i}
                            id={sound.id}
                            text={sound.text}
                            audioText={sound.audio}
                            img={sound.img != "" ? sound.img : undefined}
                        />
                    );
                })}
                {customSounds.map((customSound) => {
                    return (
                        <SoundButton
                            id={customSound.id}
                            text={customSound.text}
                            audioText={customSound.soundData}
                        />
                    );
                })}
                <AddNewSoundButton
                    customSounds={customSounds}
                    setCustomSounds={setCustomSounds}
                />
            </div>
        </>
    );
}
