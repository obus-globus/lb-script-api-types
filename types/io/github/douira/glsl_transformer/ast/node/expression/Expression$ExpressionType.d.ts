import type { Expression$ExpressionType$Associativity } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression$ExpressionType$Associativity.d.ts'
import type { Expression$ExpressionType$OperandStructure } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression$ExpressionType$OperandStructure.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Expression$ExpressionType extends Enum<Expression$ExpressionType> {
    static ADDITION: Expression$ExpressionType;
    static ADDITION_ASSIGNMENT: Expression$ExpressionType;
    static ARRAY_ACCESS: Expression$ExpressionType;
    static ASSIGNMENT: Expression$ExpressionType;
    static BITWISE_AND: Expression$ExpressionType;
    static BITWISE_AND_ASSIGNMENT: Expression$ExpressionType;
    static BITWISE_NOT: Expression$ExpressionType;
    static BITWISE_OR: Expression$ExpressionType;
    static BITWISE_OR_ASSIGNMENT: Expression$ExpressionType;
    static BITWISE_XOR: Expression$ExpressionType;
    static BITWISE_XOR_ASSIGNMENT: Expression$ExpressionType;
    static BOOLEAN_AND: Expression$ExpressionType;
    static BOOLEAN_NOT: Expression$ExpressionType;
    static BOOLEAN_OR: Expression$ExpressionType;
    static BOOLEAN_XOR: Expression$ExpressionType;
    static CONDITION: Expression$ExpressionType;
    static DECREMENT_POSTFIX: Expression$ExpressionType;
    static DECREMENT_PREFIX: Expression$ExpressionType;
    static DIVISION: Expression$ExpressionType;
    static DIVISION_ASSIGNMENT: Expression$ExpressionType;
    static EQUAL: Expression$ExpressionType;
    static FUNCTION_CALL: Expression$ExpressionType;
    static GREATER_THAN: Expression$ExpressionType;
    static GREATER_THAN_EQUAL: Expression$ExpressionType;
    static GROUPING: Expression$ExpressionType;
    static IDENTITY: Expression$ExpressionType;
    static INCREMENT_POSTFIX: Expression$ExpressionType;
    static INCREMENT_PREFIX: Expression$ExpressionType;
    static LEFT_SHIFT_ASSIGNMENT: Expression$ExpressionType;
    static LENGTH_ACCESS: Expression$ExpressionType;
    static LESS_THAN: Expression$ExpressionType;
    static LESS_THAN_EQUAL: Expression$ExpressionType;
    static LITERAL: Expression$ExpressionType;
    static MEMBER_ACCESS: Expression$ExpressionType;
    static MODULO: Expression$ExpressionType;
    static MODULO_ASSIGNMENT: Expression$ExpressionType;
    static MULTIPLICATION: Expression$ExpressionType;
    static MULTIPLICATION_ASSIGNMENT: Expression$ExpressionType;
    static NEGATION: Expression$ExpressionType;
    static NOT_EQUAL: Expression$ExpressionType;
    static REFERENCE: Expression$ExpressionType;
    static RIGHT_SHIFT_ASSIGNMENT: Expression$ExpressionType;
    static SEQUENCE: Expression$ExpressionType;
    static SHIFT_LEFT: Expression$ExpressionType;
    static SHIFT_RIGHT: Expression$ExpressionType;
    static SUBTRACTION: Expression$ExpressionType;
    static SUBTRACTION_ASSIGNMENT: Expression$ExpressionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Expression$ExpressionType;
    static values(): (Object | null)[];
    private constructor(arg2: Expression$ExpressionType$OperandStructure)
    private constructor(arg2: Expression$ExpressionType$OperandStructure, arg3: number)
    private constructor(arg2: Expression$ExpressionType$OperandStructure, arg3: number, arg4: Expression$ExpressionType$Associativity)
    associativity: Expression$ExpressionType$Associativity;
    operandStructure: Expression$ExpressionType$OperandStructure;
    precedence: number;
    name(): "REFERENCE" | "LITERAL" | "GROUPING" | "INCREMENT_POSTFIX" | "DECREMENT_POSTFIX" | "INCREMENT_PREFIX" | "DECREMENT_PREFIX" | "IDENTITY" | "NEGATION" | "BOOLEAN_NOT" | "BITWISE_NOT" | "LENGTH_ACCESS" | "MEMBER_ACCESS" | "FUNCTION_CALL" | "ARRAY_ACCESS" | "MULTIPLICATION" | "DIVISION" | "MODULO" | "ADDITION" | "SUBTRACTION" | "SHIFT_LEFT" | "SHIFT_RIGHT" | "LESS_THAN" | "GREATER_THAN" | "LESS_THAN_EQUAL" | "GREATER_THAN_EQUAL" | "EQUAL" | "NOT_EQUAL" | "BITWISE_AND" | "BITWISE_XOR" | "BITWISE_OR" | "BOOLEAN_AND" | "BOOLEAN_XOR" | "BOOLEAN_OR" | "ASSIGNMENT" | "MULTIPLICATION_ASSIGNMENT" | "DIVISION_ASSIGNMENT" | "MODULO_ASSIGNMENT" | "ADDITION_ASSIGNMENT" | "SUBTRACTION_ASSIGNMENT" | "LEFT_SHIFT_ASSIGNMENT" | "RIGHT_SHIFT_ASSIGNMENT" | "BITWISE_AND_ASSIGNMENT" | "BITWISE_XOR_ASSIGNMENT" | "BITWISE_OR_ASSIGNMENT" | "CONDITION" | "SEQUENCE";
}