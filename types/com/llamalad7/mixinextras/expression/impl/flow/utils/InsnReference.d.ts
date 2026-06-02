import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class InsnReference extends Object {
    constructor(arg0: FlowValue)
    // private insn: AbstractInsnNode;
    getNode(arg0: AbstractInsnNode[]): InjectionNodes$InjectionNode;
}