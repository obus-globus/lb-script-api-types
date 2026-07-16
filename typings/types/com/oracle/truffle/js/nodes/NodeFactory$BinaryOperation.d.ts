import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NodeFactory$BinaryOperation extends Enum<NodeFactory$BinaryOperation> {
    static ADD: NodeFactory$BinaryOperation;
    static BITWISE_AND: NodeFactory$BinaryOperation;
    static BITWISE_LEFT_SHIFT: NodeFactory$BinaryOperation;
    static BITWISE_OR: NodeFactory$BinaryOperation;
    static BITWISE_RIGHT_SHIFT: NodeFactory$BinaryOperation;
    static BITWISE_UNSIGNED_RIGHT_SHIFT: NodeFactory$BinaryOperation;
    static BITWISE_XOR: NodeFactory$BinaryOperation;
    static DECREMENT: NodeFactory$BinaryOperation;
    static DIVIDE: NodeFactory$BinaryOperation;
    static DUAL: NodeFactory$BinaryOperation;
    static EQUAL: NodeFactory$BinaryOperation;
    static EXPONENTIATE: NodeFactory$BinaryOperation;
    static GREATER: NodeFactory$BinaryOperation;
    static GREATER_OR_EQUAL: NodeFactory$BinaryOperation;
    static IDENTICAL: NodeFactory$BinaryOperation;
    static IN: NodeFactory$BinaryOperation;
    static INCREMENT: NodeFactory$BinaryOperation;
    static INSTANCEOF: NodeFactory$BinaryOperation;
    static LESS: NodeFactory$BinaryOperation;
    static LESS_OR_EQUAL: NodeFactory$BinaryOperation;
    static LOGICAL_AND: NodeFactory$BinaryOperation;
    static LOGICAL_OR: NodeFactory$BinaryOperation;
    static MODULO: NodeFactory$BinaryOperation;
    static MULTIPLY: NodeFactory$BinaryOperation;
    static NOT_EQUAL: NodeFactory$BinaryOperation;
    static NOT_IDENTICAL: NodeFactory$BinaryOperation;
    static NULLISH_COALESCING: NodeFactory$BinaryOperation;
    static SUBTRACT: NodeFactory$BinaryOperation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NodeFactory$BinaryOperation;
    static values(): NodeFactory$BinaryOperation[];
    private constructor()
    name(): "ADD" | "DIVIDE" | "MODULO" | "MULTIPLY" | "EXPONENTIATE" | "SUBTRACT" | "EQUAL" | "GREATER_OR_EQUAL" | "GREATER" | "IDENTICAL" | "LESS_OR_EQUAL" | "LESS" | "NOT_EQUAL" | "NOT_IDENTICAL" | "BITWISE_XOR" | "BITWISE_AND" | "BITWISE_OR" | "BITWISE_LEFT_SHIFT" | "BITWISE_RIGHT_SHIFT" | "BITWISE_UNSIGNED_RIGHT_SHIFT" | "LOGICAL_AND" | "LOGICAL_OR" | "INSTANCEOF" | "IN" | "DUAL" | "NULLISH_COALESCING" | "INCREMENT" | "DECREMENT";
}