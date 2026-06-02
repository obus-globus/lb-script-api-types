import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { Expression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { SimpleExpression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/SimpleExpression.d.ts'
import type { UnaryExpression$Operator } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/UnaryExpression$Operator.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
export class UnaryExpression extends SimpleExpression {
    constructor(arg0: ExpressionSource, arg1: UnaryExpression$Operator, arg2: Expression)
    expression: Expression;
    operator: UnaryExpression$Operator;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}