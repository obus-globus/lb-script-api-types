import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkLightStorage$ChunkLight extends Record {
    // private blockLight: number[][];
    // private blockLightMask: number[];
    // private emptyBlockLightMask: number[];
    // private emptySkyLightMask: number[];
    // private skyLight: number[][];
    // private skyLightMask: number[];
    // private trustEdges: boolean;
    blockLight(): number[][];
    blockLightMask(): number[];
    emptyBlockLightMask(): number[];
    emptySkyLightMask(): number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    skyLight(): number[][];
    skyLightMask(): number[];
    toString(): string;
    trustEdges(): boolean;
}