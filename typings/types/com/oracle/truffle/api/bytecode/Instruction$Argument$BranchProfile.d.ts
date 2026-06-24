import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Instruction$Argument$BranchProfile extends Record {
    constructor(index: number, trueCount: number, falseCount: number)
    // private falseCount: number;
    // private index: number;
    // private trueCount: number;
    equals(o: Object | null): boolean;
    falseCount(): number;
    getFrequency(): number;
    hashCode(): number;
    index(): number;
    toString(): string;
    trueCount(): number;
}