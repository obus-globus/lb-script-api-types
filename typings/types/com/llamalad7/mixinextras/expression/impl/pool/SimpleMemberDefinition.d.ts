import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { MemberDefinition } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/MemberDefinition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../../org/objectweb/asm/Handle.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export interface SimpleMemberDefinition extends MemberDefinition, Object{
    matches(arg0: FlowValue): boolean;
    matches(arg0: Handle): boolean;
    matches(arg0: AbstractInsnNode): boolean;
}