import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Constant$Condition extends Enum<Constant$Condition> {
    static GREATER_THAN_OR_EQUAL_TO_ZERO: Constant$Condition;
    static GREATER_THAN_ZERO: Constant$Condition;
    static LESS_THAN_OR_EQUAL_TO_ZERO: Constant$Condition;
    static LESS_THAN_ZERO: Constant$Condition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Constant$Condition;
    static values(): (Object | null)[];
    private constructor(...arg2: number[])
    private constructor(arg2: Constant$Condition)
    private constructor(arg2: Constant$Condition, ...arg3: number[])
    // private equivalence: Constant$Condition;
    readonly opcodes: number[];
    getEquivalentCondition(): Constant$Condition;
    getOpcodes(): number[];
    name(): "LESS_THAN_ZERO" | "LESS_THAN_OR_EQUAL_TO_ZERO" | "GREATER_THAN_OR_EQUAL_TO_ZERO" | "GREATER_THAN_ZERO";
}