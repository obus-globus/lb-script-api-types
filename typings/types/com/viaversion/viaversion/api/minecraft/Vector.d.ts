import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Vector extends Record {
    constructor(blockX: number, blockY: number, blockZ: number)
    // private blockX: number;
    // private blockY: number;
    // private blockZ: number;
    blockX(): number;
    blockY(): number;
    blockZ(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}