import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ChunkLightStorage$ChunkLight } from '../../../../../../com/viaversion/viabackwards/protocol/v1_14to1_13_2/storage/ChunkLightStorage$ChunkLight.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkLightStorage extends Object implements StorableObject {
    static EMPTY_LIGHT: number[];
    static FULL_LIGHT: number[];
    constructor()
    // private storedLight: JavaMap<any, any>;
    clear(): void;
    // private getChunkSectionIndex(arg0: number, arg1: number): number;
    getStoredLight(arg0: number, arg1: number): ChunkLightStorage$ChunkLight;
    onRemove(): void;
    setStoredLight(arg0: number[][], arg1: number[][], arg2: number, arg3: number): void;
    unloadChunk(arg0: number, arg1: number): void;
}