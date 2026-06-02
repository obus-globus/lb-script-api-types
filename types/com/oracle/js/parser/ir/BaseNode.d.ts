import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { FunctionCall } from '../../../../../com/oracle/js/parser/ir/FunctionCall.d.ts'
import type { OptionalExpression } from '../../../../../com/oracle/js/parser/ir/OptionalExpression.d.ts'
export abstract class BaseNode extends OptionalExpression implements FunctionCall {
    constructor(baseNode: BaseNode, base: Expression, isSuper: boolean, optional: boolean, optionalChain: boolean)
    constructor(token: number, finish: number, base: Expression, isSuper: boolean, optional: boolean, optionalChain: boolean)
    readonly base: Expression;
    // private isFunction: boolean;
    // private isSuper: boolean;
    readonly optional: boolean;
    readonly optionalChain: boolean;
    getBase(): Expression;
    isFunction(): boolean;
    isIndex(): boolean;
    isOptional(): boolean;
    isOptionalChain(): boolean;
    isSuper(): boolean;
    setIsFunction(): BaseNode;
    setIsSuper(): BaseNode;
}