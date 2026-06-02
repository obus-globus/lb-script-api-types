import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { MemberDefinition } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/MemberDefinition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { LocalVariableDiscriminator } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class LocalDef extends Object implements MemberDefinition {
    constructor(arg0: AnnotationNode, arg1: InjectionInfo, arg2: AbstractInsnNode[])
    // private discriminator: LocalVariableDiscriminator;
    // private info: InjectionInfo;
    // private isArgsOnly: boolean;
    // private target: AbstractInsnNode[];
    // private targetLocalType: Type;
    matches(arg0: FlowValue): boolean;
}