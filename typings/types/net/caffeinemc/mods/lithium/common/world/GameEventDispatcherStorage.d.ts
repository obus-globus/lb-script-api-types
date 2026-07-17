import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GameEventDispatcherStorage extends Record {
    constructor()
    constructor(storage: JavaMap<any, any>, loadedChunks: (Object | null)[])
    // private loadedChunks: (Object | null)[];
    // private storage: JavaMap<any, any>;
    addChunk(arg0: number, arg1: JavaMap<any, any>): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): JavaMap<any, any>;
    hashCode(): number;
    loadedChunks(): (Object | null)[];
    removeChunk(arg0: number): void;
    replace(arg0: number, arg1: JavaMap<any, any>): void;
    storage(): JavaMap<any, any>;
    toString(): string;
}