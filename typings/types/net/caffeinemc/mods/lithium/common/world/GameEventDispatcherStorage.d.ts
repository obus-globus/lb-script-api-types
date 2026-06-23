import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GameEventDispatcherStorage extends Record {
    constructor()
    constructor(storage: { [key: string]: any }, loadedChunks: (Object | null)[])
    // private loadedChunks: (Object | null)[];
    // private storage: { [key: string]: any };
    addChunk(arg0: number, arg1: { [key: string]: any }): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): { [key: string]: any };
    hashCode(): number;
    loadedChunks(): (Object | null)[];
    removeChunk(arg0: number): void;
    replace(arg0: number, arg1: { [key: string]: any }): void;
    storage(): { [key: string]: any };
    toString(): string;
}