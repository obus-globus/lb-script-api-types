import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { Function$Argument } from '../../../../team/unnamed/mocha/runtime/value/Function$Argument.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class ExpressionInterpreter$FunctionArgumentImpl extends Object implements Function$Argument {
    constructor(null_: ExpressionInterpreter$FunctionArgumentImpl, arg1: Expression)
    // private expression: Expression;
    eval(): Value;
    expression(): Expression;
}