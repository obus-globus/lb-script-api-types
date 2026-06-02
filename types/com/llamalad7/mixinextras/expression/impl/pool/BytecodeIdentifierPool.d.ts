import type { IdentifierPool } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/IdentifierPool.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class BytecodeIdentifierPool extends IdentifierPool {
    constructor(arg0: AbstractInsnNode[], arg1: InjectionInfo, arg2: AnnotationNode)
    // private parseEntry(arg0: AnnotationNode, arg1: AbstractInsnNode[], arg2: InjectionInfo): void;
}