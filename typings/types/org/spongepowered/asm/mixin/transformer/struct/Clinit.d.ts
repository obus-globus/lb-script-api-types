import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { LabelNode } from '../../../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export class Clinit extends Object {
    static prepare(paramarg0: AbstractInsnNode[]): Clinit;
    constructor(arg0: MethodNode, arg1: AbstractInsnNode)
    // private clinit: MethodNode;
    // private finalReturn: AbstractInsnNode;
    append(arg0: IMixinInfo, arg1: MethodNode): void;
    appendInsns(arg0: IMixinInfo, arg1: MethodNode, arg2: JavaMap<LabelNode, LabelNode>): void;
}