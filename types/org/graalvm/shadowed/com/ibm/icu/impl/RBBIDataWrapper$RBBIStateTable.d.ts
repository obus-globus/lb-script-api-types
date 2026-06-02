import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RBBIDataWrapper$RBBIStateTable extends Object {
    static fHeaderSize: number;
    constructor()
    fDictCategoriesStart: number;
    fFlags: number;
    fLookAheadResultsSize: number;
    fNumStates: number;
    fRowLen: number;
    fTable: string[];
    equals(other: Object | null): boolean;
    put(bytes: DataOutputStream): number;
}