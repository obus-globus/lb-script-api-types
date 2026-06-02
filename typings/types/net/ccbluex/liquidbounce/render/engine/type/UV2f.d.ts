import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UV2f extends Record {
    constructor(u: number, v: number)
    // private u: number;
    /*not mapped: */ u(): number;
    // private v: number;
    /*not mapped: */ v(): number;
    component1(): number;
    component2(): number;
    copy(u: number, v: number): UV2f;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}