import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StatePropertyMatcher$RangedMatcher extends Record {
    constructor(minValue: string, maxValue: string)
    // private maxValue: string;
    // private minValue: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    maxValue(): string;
    minValue(): string;
    toString(): string;
}