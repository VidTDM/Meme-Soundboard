import { useRef } from "react";
import NewSoundModal from "../modals/NewSoundModal";

export default function SoundButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleClick = () => {
        modalRef.current?.showModal();
    };
    return (
        <>
            <button
                type="button"
                className="outline"
                ref={buttonRef}
                onClick={handleClick}
            >
                Add New Sound <b>+</b>
            </button>
            <NewSoundModal modalRef={modalRef} />
        </>
    );
}
