import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChunkTracker$SubChunkPosition extends Record {
    private constructor(chunkX: number, subChunkY: number, chunkZ: number)
    // private chunkX: number;
    // private chunkZ: number;
    // private subChunkY: number;
    chunkX(): number;
    chunkZ(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    subChunkY(): number;
    toString(): string;
}