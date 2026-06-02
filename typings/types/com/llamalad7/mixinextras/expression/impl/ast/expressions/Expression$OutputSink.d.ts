import type { Expression } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export interface Expression$OutputSink extends Object{
    capture(arg0: FlowValue, arg1: Expression, arg2: ExpressionContext): void;
    decorate(arg0: AbstractInsnNode, arg1: string, arg2: Object): void;
    decorateInjectorSpecific(arg0: AbstractInsnNode, arg1: string, arg2: Object): void;
    reportMatchStatus(arg0: FlowValue, arg1: Expression, arg2: boolean): void;
    reportPartialMatch(arg0: FlowValue, arg1: Expression): void;
}