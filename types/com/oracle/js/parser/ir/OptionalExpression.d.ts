import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
export abstract class OptionalExpression extends Expression {
    constructor(baseNode: OptionalExpression)
    constructor(token: number, finish: number)
    constructor(token: number, start: number, finish: number)
    isOptional(): boolean;
    isOptionalChain(): boolean;
}