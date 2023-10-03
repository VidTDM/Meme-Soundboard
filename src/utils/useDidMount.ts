import { useEffect, useRef } from "react";

type callback = () => void;

/**
 * The useDidMount function is a custom hook in TypeScript that calls a callback function only once when the component is mounted.
 * @param {callback} callback - The `callback` parameter is a function that will be executed when the component mounts for the first time.
 */
export default function useDidMount(callback: callback) {
    const didMount = useRef<boolean>();
    useEffect(() => {
        if (didMount.current) return;
        didMount.current = true;
        callback();
    });
}
