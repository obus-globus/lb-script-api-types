import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { Expression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { MemberIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/MemberIdentifier.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
export class IdentifierAssignmentExpression extends Expression {
    constructor(arg0: ExpressionSource, arg1: MemberIdentifier, arg2: Expression)
    identifier: MemberIdentifier;
    value: Expression;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}