import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { InsnReference } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/utils/InsnReference.d.ts'
import type { ComparisonInfo } from '../../../../../../com/llamalad7/mixinextras/expression/impl/utils/ComparisonInfo.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { JumpInsnNode } from '../../../../../../org/objectweb/asm/tree/JumpInsnNode.d.ts'
export class ComplexComparisonInfo extends ComparisonInfo {
    constructor(arg0: number, arg1: FlowValue, arg2: Type, arg3: FlowValue, arg4: boolean)
    // private jumpInsn: InsnReference;
    // private jumpOpcode: number;
    cleanup(arg0: AbstractInsnNode[]): void;
    copyJump(arg0: AbstractInsnNode[]): number;
    getJumpInsn(arg0: AbstractInsnNode[]): JumpInsnNode;
}