import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StatsCounterFix$StatType extends Record {
    private constructor(type: string, typeKey: string)
    // private type: string;
    // private typeKey: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): string;
    typeKey(): string;
}