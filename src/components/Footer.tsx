export default function Footer() {
    const handleClick = () => {
        document.querySelectorAll("audio").forEach((el) => {
            el.pause();
            el.currentTime = 0;
        });
    };
    return (
        <>
            <footer>
                <button
                    type="button"
                    className="stop-sounds primary"
                    onClick={handleClick}
                >
                    STOP ALL SOUNDS
                </button>
            </footer>
        </>
    );
}
