import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { LabelNode } from '../../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { EnumInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/EnumInfo.d.ts'
import type { Clinit } from '../../../../../org/spongepowered/asm/mixin/transformer/struct/Clinit.d.ts'
export class MixinApplicatorEnum$EnumClinit extends Clinit {
    static prepare(paramarg0: AbstractInsnNode[]): Clinit;
    constructor(null_: MixinApplicatorEnum$EnumClinit)
    private constructor(null_: MixinApplicatorEnum$EnumClinit, arg1: AbstractInsnNode[])
    appendInsns(arg0: IMixinInfo, arg1: MethodNode, arg2: Map<LabelNode, LabelNode>): void;
    // private concatEnumValues(): AbstractInsnNode[];
    // private isCurrentOrdinalCall(arg0: AbstractInsnNode): boolean;
    // private spliceEnumClinit(arg0: IMixinInfo, arg1: EnumInfo, arg2: Map<LabelNode, LabelNode>): void;
}