import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BinaryExpression$Op extends Enum<BinaryExpression$Op> {
    static ADD: BinaryExpression$Op;
    static AND: BinaryExpression$Op;
    static ARROW: BinaryExpression$Op;
    static ASSIGN: BinaryExpression$Op;
    static CONDITIONAL: BinaryExpression$Op;
    static DIV: BinaryExpression$Op;
    static EQ: BinaryExpression$Op;
    static GT: BinaryExpression$Op;
    static GTE: BinaryExpression$Op;
    static LT: BinaryExpression$Op;
    static LTE: BinaryExpression$Op;
    static MUL: BinaryExpression$Op;
    static NEQ: BinaryExpression$Op;
    static NULL_COALESCE: BinaryExpression$Op;
    static OR: BinaryExpression$Op;
    static SUB: BinaryExpression$Op;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BinaryExpression$Op;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private precedence: number;
    precedence(): number;
    name(): "AND" | "OR" | "LT" | "LTE" | "GT" | "GTE" | "ADD" | "SUB" | "MUL" | "DIV" | "ARROW" | "NULL_COALESCE" | "ASSIGN" | "CONDITIONAL" | "EQ" | "NEQ";
}