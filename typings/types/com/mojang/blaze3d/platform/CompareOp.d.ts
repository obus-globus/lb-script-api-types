import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CompareOp extends Enum<CompareOp> {
    static ALWAYS_PASS: CompareOp;
    static EQUAL: CompareOp;
    static GREATER_THAN: CompareOp;
    static GREATER_THAN_OR_EQUAL: CompareOp;
    static LESS_THAN: CompareOp;
    static LESS_THAN_OR_EQUAL: CompareOp;
    static NEVER_PASS: CompareOp;
    static NOT_EQUAL: CompareOp;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CompareOp;
    static values(): CompareOp[];
    private constructor()
    name(): "ALWAYS_PASS" | "LESS_THAN" | "LESS_THAN_OR_EQUAL" | "EQUAL" | "NOT_EQUAL" | "GREATER_THAN_OR_EQUAL" | "GREATER_THAN" | "NEVER_PASS";
}