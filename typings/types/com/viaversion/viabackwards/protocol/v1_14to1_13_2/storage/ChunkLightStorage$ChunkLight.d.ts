import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkLightStorage$ChunkLight extends Record {
    // private blockLight: number[][];
    // private skyLight: number[][];
    blockLight(): number[][];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    skyLight(): number[][];
    toString(): string;
}