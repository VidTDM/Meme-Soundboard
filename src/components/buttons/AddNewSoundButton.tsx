import { Dispatch, SetStateAction, useRef } from "react";
import NewSoundModal from "../modals/NewSoundModal";
import { Sound } from "../Main";

interface AddNewSoundButtonProps {
    db: {
        collection: Function;
    };
    customSounds: Array<Sound>;
    setCustomSounds: Dispatch<SetStateAction<Object[]>>;
}

export default function AddNewSoundButton({
    db,
    customSounds,
    setCustomSounds,
}: AddNewSoundButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleClick = (): void => {
        modalRef.current.showModal();
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
            <NewSoundModal
                modalRef={modalRef}
                db={db}
                customSounds={customSounds}
                setCustomSounds={setCustomSounds}
            />
        </>
    );
}
