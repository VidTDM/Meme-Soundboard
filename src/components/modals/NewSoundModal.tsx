import { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from "react";
import { Sound } from "../Main";

interface NewSoundModalProps {
    modalRef: MutableRefObject<HTMLDialogElement>;
    customSounds: Array<Sound>;
    setCustomSounds: Dispatch<SetStateAction<Array<Sound>>>;
}

export default function NewSoundModal({
    modalRef,
    customSounds,
    setCustomSounds,
}: NewSoundModalProps) {
    const [nameInput, setNameInput] = useState<string>("");
    const [fileInput, setFileInput] = useState<Object>(undefined);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const closeModal = (): void => {
        modalRef.current.close();
        setNameInput("");
        setFileInput("");
        fileInputRef.current.value = "";
    };

    const createSound = (): void => {
        if (!fileInput[0] || nameInput == "" || fileInput == undefined)
            return closeModal();

        const id = nameInput
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/[\s_]+/g, "-")
            .toLowerCase();
        const reader = new FileReader();
        reader.readAsDataURL(fileInput[0]);
        reader.onload = () => {
            setCustomSounds([
                ...customSounds,
                {
                    id,
                    text: nameInput,
                    soundData: reader.result,
                },
            ]);
        };
        reader.onerror = (err) => console.error("Error: ", err);

        closeModal();
    };
    return (
        <dialog ref={modalRef}>
            <header>
                <label>Create New Sound</label>
                <button type="button" onClick={closeModal} className="transparent">
                    <span>&times;</span>
                </button>
            </header>
            <main>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Bruh"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Sound File:</label>
                        <input
                            type="file"
                            id="file"
                            accept=".mp3"
                            onChange={(e) => setFileInput(e.target.files)}
                            ref={fileInputRef}
                        />
                    </div>
                </form>
            </main>
            {/* prettier-ignore */}
            <footer>
                <button type="button" className="primary" onClick={createSound}>
                    Create
                </button>
                <button type="button" className="secondary" onClick={closeModal}>
                    Close
                </button>
            </footer>
        </dialog>
    );
}
