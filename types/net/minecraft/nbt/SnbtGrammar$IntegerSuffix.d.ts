import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SnbtGrammar$SignedPrefix } from '../../../net/minecraft/nbt/SnbtGrammar$SignedPrefix.d.ts'
import type { SnbtGrammar$TypeSuffix } from '../../../net/minecraft/nbt/SnbtGrammar$TypeSuffix.d.ts'
export class SnbtGrammar$IntegerSuffix extends Record {
    static EMPTY: SnbtGrammar$IntegerSuffix;
    private constructor(signed: SnbtGrammar$SignedPrefix, type: SnbtGrammar$TypeSuffix)
    // private signed: SnbtGrammar$SignedPrefix;
    // private type: SnbtGrammar$TypeSuffix;
    equals(o: Object | null): boolean;
    hashCode(): number;
    signed(): SnbtGrammar$SignedPrefix;
    toString(): string;
    type(): SnbtGrammar$TypeSuffix;
}