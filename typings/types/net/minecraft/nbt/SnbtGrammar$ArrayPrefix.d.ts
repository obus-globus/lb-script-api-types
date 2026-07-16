import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { SnbtGrammar$IntegerLiteral } from '../../../net/minecraft/nbt/SnbtGrammar$IntegerLiteral.d.ts'
import type { SnbtGrammar$IntegerSuffix } from '../../../net/minecraft/nbt/SnbtGrammar$IntegerSuffix.d.ts'
import type { SnbtGrammar$TypeSuffix } from '../../../net/minecraft/nbt/SnbtGrammar$TypeSuffix.d.ts'
import type { ParseState } from '../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
export class SnbtGrammar$ArrayPrefix extends Enum<SnbtGrammar$ArrayPrefix> {
    static BYTE: SnbtGrammar$ArrayPrefix;
    static INT: SnbtGrammar$ArrayPrefix;
    static LONG: SnbtGrammar$ArrayPrefix;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SnbtGrammar$ArrayPrefix;
    static values(): SnbtGrammar$ArrayPrefix[];
    private constructor(defaultType: SnbtGrammar$TypeSuffix, ...additionalTypes: SnbtGrammar$TypeSuffix[])
    // private additionalTypes: SnbtGrammar$TypeSuffix[];
    // private defaultType: SnbtGrammar$TypeSuffix;
    buildNumber(entry: SnbtGrammar$IntegerLiteral, state: ParseState<Object>): Number;
    // private computeType(value: SnbtGrammar$IntegerSuffix): SnbtGrammar$TypeSuffix;
    create<T extends unknown>(ops: DynamicOps<T>): T;
    create<T extends unknown>(ops: DynamicOps<T>, entries: SnbtGrammar$IntegerLiteral[], state: ParseState<Object>): T;
    isAllowed(type: SnbtGrammar$TypeSuffix): boolean;
    name(): "BYTE" | "INT" | "LONG";
}