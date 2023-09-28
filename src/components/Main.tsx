import { useState, useRef, useMemo } from "react";
import SoundButton from "./buttons/SoundButton";
import AddNewSoundButton from './buttons/AddNewSoundButton';
import sounds from "../data/sounds";

export default function Main() {
    const [query, setQuery] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredSounds = useMemo(() => {
        return sounds.filter(sound => {
            return sound.text.toLowerCase().includes(query.toLowerCase());
        });
    }, [query]);
    return (
        <>
            <div className="search-box">
                <input
                    type="search"
                    ref={inputRef}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
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
                {}
                <AddNewSoundButton />
            </div>
        </>
    );
}
