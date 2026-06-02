import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { ComparisonExpression$Operator } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ComparisonExpression$Operator.d.ts'
import type { Expression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
export class ComparisonExpression extends Expression {
    constructor(arg0: ExpressionSource, arg1: Expression, arg2: ComparisonExpression$Operator, arg3: Expression)
    left: Expression;
    operator: ComparisonExpression$Operator;
    right: Expression;
    capture(arg0: FlowValue, arg1: ExpressionContext): void;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}