import { useState } from "react";

interface NewSoundModalProps {
    modalRef: any;
}

export default function NewSoundModal({ modalRef }: NewSoundModalProps) {
    const [inputName, setInputName] = useState<string>("");
    const [inputFile, setInputFile] = useState<string>("");

    const closeModal = () => {
        modalRef.current.close();
        setInputName("");
        setInputFile("");
    };

    const createSound = () => {
        console.warn("Doesn't work yet");
        closeModal();
    };
    return (
        <dialog ref={modalRef}>
            <header>
                <label>Create New Sound</label>
                <button type="button" onClick={closeModal}>
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
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Sound File:</label>
                        <input
                            type="file"
                            id="file"
                            accept=".mp3"
                            value={inputFile}
                            onChange={(e) => setInputFile(e.target.value)}
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
