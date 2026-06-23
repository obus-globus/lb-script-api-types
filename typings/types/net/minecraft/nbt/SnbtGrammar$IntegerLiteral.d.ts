import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SnbtGrammar$Base } from '../../../net/minecraft/nbt/SnbtGrammar$Base.d.ts'
import type { SnbtGrammar$IntegerSuffix } from '../../../net/minecraft/nbt/SnbtGrammar$IntegerSuffix.d.ts'
import type { SnbtGrammar$Sign } from '../../../net/minecraft/nbt/SnbtGrammar$Sign.d.ts'
import type { SnbtGrammar$SignedPrefix } from '../../../net/minecraft/nbt/SnbtGrammar$SignedPrefix.d.ts'
import type { SnbtGrammar$TypeSuffix } from '../../../net/minecraft/nbt/SnbtGrammar$TypeSuffix.d.ts'
import type { ParseState } from '../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
export class SnbtGrammar$IntegerLiteral extends Record {
    private constructor(sign: SnbtGrammar$Sign, base: SnbtGrammar$Base, digits: string, suffix: SnbtGrammar$IntegerSuffix)
    // private base: SnbtGrammar$Base;
    // private digits: string;
    // private sign: SnbtGrammar$Sign;
    // private suffix: SnbtGrammar$IntegerSuffix;
    base(): SnbtGrammar$Base;
    // private cleanupDigits(sign: SnbtGrammar$Sign): string;
    create<T extends unknown>(ops: DynamicOps<T>, type: SnbtGrammar$TypeSuffix, state: ParseState<Object>): T;
    create<T extends unknown>(ops: DynamicOps<T>, state: ParseState<Object>): T;
    digits(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sign(): SnbtGrammar$Sign;
    // private signedOrDefault(): SnbtGrammar$SignedPrefix;
    suffix(): SnbtGrammar$IntegerSuffix;
    toString(): string;
}