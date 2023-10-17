import Dexie, { Table } from "dexie";

interface CustomSound {
    id: string;
    text: string;
    soundData: any;
}

export class MySubClassDexie extends Dexie {
    sounds!: Table<CustomSound>;
    constructor() {
        super("SoundsDB");
        this.version(1).stores({
            sounds: "++id,text,soundData",
        });
    }
}

export const db = new MySubClassDexie();