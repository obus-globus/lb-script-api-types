import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { Expression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { TypeIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/TypeIdentifier.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
export class InstantiationExpression extends Expression {
    constructor(arg0: ExpressionSource, arg1: TypeIdentifier, arg2: Expression[])
    arguments: Expression[];
    type: TypeIdentifier;
    capture(arg0: FlowValue, arg1: ExpressionContext): void;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}