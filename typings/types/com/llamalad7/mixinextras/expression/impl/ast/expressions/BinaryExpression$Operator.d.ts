import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class BinaryExpression$Operator extends Enum<BinaryExpression$Operator> {
    static BITWISE_AND: BinaryExpression$Operator;
    static BITWISE_OR: BinaryExpression$Operator;
    static BITWISE_XOR: BinaryExpression$Operator;
    static DIV: BinaryExpression$Operator;
    static MINUS: BinaryExpression$Operator;
    static MOD: BinaryExpression$Operator;
    static MULT: BinaryExpression$Operator;
    static PLUS: BinaryExpression$Operator;
    static SHL: BinaryExpression$Operator;
    static SHR: BinaryExpression$Operator;
    static USHR: BinaryExpression$Operator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BinaryExpression$Operator;
    static values(): (Object | null)[];
    private constructor(arg2: number[])
    // private opcodes: number[];
    matches(arg0: AbstractInsnNode): boolean;
    name(): "MULT" | "DIV" | "MOD" | "PLUS" | "MINUS" | "SHL" | "SHR" | "USHR" | "BITWISE_AND" | "BITWISE_XOR" | "BITWISE_OR";
}