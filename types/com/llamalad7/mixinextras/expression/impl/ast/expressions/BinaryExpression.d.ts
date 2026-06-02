import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { BinaryExpression$Operator } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/BinaryExpression$Operator.d.ts'
import type { Expression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { SimpleExpression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/SimpleExpression.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
import type { ExpressionContext$Type } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext$Type.d.ts'
export class BinaryExpression extends SimpleExpression {
    constructor(arg0: ExpressionSource, arg1: Expression, arg2: BinaryExpression$Operator, arg3: Expression)
    left: Expression;
    operator: BinaryExpression$Operator;
    right: Expression;
    capture(arg0: FlowValue, arg1: ExpressionContext): void;
    // private checkSupportsStringConcat(arg0: ExpressionContext$Type): void;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}