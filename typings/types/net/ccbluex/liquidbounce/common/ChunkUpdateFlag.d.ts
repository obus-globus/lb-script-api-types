import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkUpdateFlag extends Object {
    static isChunkDeltaUpdating(): boolean;
    static withChunkDeltaUpdating(paramarg0: () => void): void;
    constructor()
}