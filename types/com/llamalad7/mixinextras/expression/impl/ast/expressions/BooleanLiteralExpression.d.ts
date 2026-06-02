import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { SimpleExpression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/SimpleExpression.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
export class BooleanLiteralExpression extends SimpleExpression {
    constructor(arg0: ExpressionSource, arg1: boolean)
    value: boolean;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}