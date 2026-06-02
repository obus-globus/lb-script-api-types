import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { SimpleExpression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/SimpleExpression.d.ts'
import type { MemberIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/MemberIdentifier.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
export class FreeMethodReferenceExpression extends SimpleExpression {
    constructor(arg0: ExpressionSource, arg1: MemberIdentifier)
    name: MemberIdentifier;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}