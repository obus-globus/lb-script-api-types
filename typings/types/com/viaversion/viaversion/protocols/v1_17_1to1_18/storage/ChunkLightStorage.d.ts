import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ChunkLightStorage$ChunkLight } from '../../../../../../com/viaversion/viaversion/protocols/v1_17_1to1_18/storage/ChunkLightStorage$ChunkLight.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkLightStorage extends Object {
    constructor()
    // private lightPackets: JavaMap<any, any>;
    // private loadedChunks: (Object | null)[];
    addLoadedChunk(arg0: number, arg1: number): boolean;
    clear(): void;
    clear(arg0: number, arg1: number): void;
    getLight(arg0: number, arg1: number): ChunkLightStorage$ChunkLight;
    isLoaded(arg0: number, arg1: number): boolean;
    removeLight(arg0: number, arg1: number): ChunkLightStorage$ChunkLight;
    storeLight(arg0: number, arg1: number, arg2: ChunkLightStorage$ChunkLight): void;
}