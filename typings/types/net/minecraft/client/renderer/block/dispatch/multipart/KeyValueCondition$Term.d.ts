import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class KeyValueCondition$Term extends Record {
    static parse(paramvalue: string): KeyValueCondition$Term;
    // private negated: boolean;
    // private value: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negated(): boolean;
    toString(): string;
    value(): string;
}