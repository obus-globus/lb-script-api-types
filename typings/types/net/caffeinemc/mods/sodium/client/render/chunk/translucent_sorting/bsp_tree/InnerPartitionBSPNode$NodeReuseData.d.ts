import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class InnerPartitionBSPNode$NodeReuseData extends Record {
    constructor(quadHash: number, indexes: number[], indexCount: number, maxIndex: number)
    // private indexCount: number;
    // private indexes: number[];
    // private maxIndex: number;
    // private quadHash: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    indexCount(): number;
    indexes(): number[];
    maxIndex(): number;
    quadHash(): number;
    toString(): string;
}