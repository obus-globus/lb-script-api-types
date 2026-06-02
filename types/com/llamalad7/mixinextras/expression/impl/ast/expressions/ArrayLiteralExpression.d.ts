import type { ExpressionSource } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { Expression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { SimpleExpression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/SimpleExpression.d.ts'
import type { TypeIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/TypeIdentifier.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class ArrayLiteralExpression extends SimpleExpression {
    constructor(arg0: ExpressionSource, arg1: TypeIdentifier, arg2: Expression[])
    elementType: TypeIdentifier;
    values: Expression[];
    // private getElementType(arg0: AbstractInsnNode): Type;
    matchesImpl(arg0: FlowValue, arg1: ExpressionContext): boolean;
}