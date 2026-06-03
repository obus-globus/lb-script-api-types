import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { SimpleMemberDefinition } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/SimpleMemberDefinition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../../org/objectweb/asm/Handle.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class ArrayLengthDef extends Object implements SimpleMemberDefinition {
    constructor()
    matches(arg0: FlowValue): boolean;
    matches(arg0: Handle): boolean;
    matches(arg0: AbstractInsnNode): boolean;
    matches(arg0: FlowValue): boolean;
    matches(arg0: Handle): boolean;
}