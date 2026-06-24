import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CuboidFace$UVs extends Record {
    constructor(minU: number, minV: number, maxU: number, maxV: number)
    // private maxU: number;
    // private maxV: number;
    // private minU: number;
    // private minV: number;
    equals(o: Object | null): boolean;
    getVertexU(index: number): number;
    getVertexV(index: number): number;
    hashCode(): number;
    maxU(): number;
    maxV(): number;
    minU(): number;
    minV(): number;
    toString(): string;
}