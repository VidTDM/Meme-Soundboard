import SoundButton from "./SoundButton";
import sounds from "../data/sounds";

export default function Main() {
    return (
        <>
            <div className="search-box">
                <input type="search" placeholder="&#xF002"/>
            </div>
            <div className="buttonList">
                {sounds.map((sound, i) => {
                    return <SoundButton key={i} id={sound.id} text={sound.text} audioText={sound.audio}/>;
                })}
            </div>
        </>
    );
}
