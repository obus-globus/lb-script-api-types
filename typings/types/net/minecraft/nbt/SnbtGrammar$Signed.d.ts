import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SnbtGrammar$Sign } from '../../../net/minecraft/nbt/SnbtGrammar$Sign.d.ts'
export class SnbtGrammar$Signed<T extends Object | number | string | boolean> extends Record {
    private constructor(sign: SnbtGrammar$Sign, value: T)
    // private sign: SnbtGrammar$Sign;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sign(): SnbtGrammar$Sign;
    toString(): string;
    value(): T;
}