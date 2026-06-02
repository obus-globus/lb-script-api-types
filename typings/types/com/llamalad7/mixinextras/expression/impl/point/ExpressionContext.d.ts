import type { Expression } from '../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { Expression$OutputSink } from '../../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression$OutputSink.d.ts'
import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { ExpressionContext$Type } from '../../../../../../com/llamalad7/mixinextras/expression/impl/point/ExpressionContext$Type.d.ts'
import type { IdentifierPool } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/IdentifierPool.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class ExpressionContext extends Object {
    constructor(arg0: IdentifierPool, arg1: Expression$OutputSink, arg2: ClassNode, arg3: MethodNode, arg4: ExpressionContext$Type, arg5: boolean)
    allowIncompleteListInputs: boolean;
    classNode: ClassNode;
    isStatic: boolean;
    method: MethodNode;
    pool: IdentifierPool;
    // private sink: Expression$OutputSink;
    type: ExpressionContext$Type;
    capture(arg0: FlowValue, arg1: Expression): void;
    decorate(arg0: AbstractInsnNode, arg1: string, arg2: Object): void;
    decorateInjectorSpecific(arg0: AbstractInsnNode, arg1: string, arg2: Object): void;
    reportMatchStatus(arg0: FlowValue, arg1: Expression, arg2: boolean): void;
    reportPartialMatch(arg0: FlowValue, arg1: Expression): void;
}