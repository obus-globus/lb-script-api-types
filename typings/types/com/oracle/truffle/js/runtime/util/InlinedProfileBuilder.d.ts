import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InlinedProfileBuilder extends Object {
    constructor(offset: number, length: number)
    // private stateFieldCursor: number;
    // private stateFieldLength: number;
    // private stateFieldStart: number;
    branchProfile(): number;
    conditionProfile(): number;
    maybeAdvanceStateField(bits: number): void;
    // private stateFieldOffsetForBits(bits: number): number;
}