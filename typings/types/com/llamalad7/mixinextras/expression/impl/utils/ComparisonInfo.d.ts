import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { InsnReference } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/utils/InsnReference.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { JumpInsnNode } from '../../../../../../org/objectweb/asm/tree/JumpInsnNode.d.ts'
import type { LabelNode } from '../../../../../../org/objectweb/asm/tree/LabelNode.d.ts'
export class ComparisonInfo extends Object {
    constructor(arg0: number, arg1: FlowValue, arg2: Type, arg3: boolean)
    // private comparison: number;
    input: Type;
    jumpOnTrue: boolean;
    // private node: InsnReference;
    attach(arg0: (param0: string, param1: Object) => void, arg1: (param0: string, param1: Object) => void): void;
    cleanup(arg0: AbstractInsnNode[]): void;
    copyJump(arg0: AbstractInsnNode[]): number;
    getJumpInsn(arg0: AbstractInsnNode[]): JumpInsnNode;
    getJumpTarget(arg0: AbstractInsnNode[]): LabelNode;
}