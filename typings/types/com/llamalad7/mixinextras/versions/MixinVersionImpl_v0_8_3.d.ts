import type { MixinVersion } from '../../../../com/llamalad7/mixinextras/versions/MixinVersion.d.ts'
import type { MixinVersionImpl_v0_8 } from '../../../../com/llamalad7/mixinextras/versions/MixinVersionImpl_v0_8.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MemberInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/MemberInfo.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
export class MixinVersionImpl_v0_8_3 extends MixinVersionImpl_v0_8 {
    static getInstance(): MixinVersion;
    constructor()
    getAnnotation(arg0: InjectionInfo): AnnotationNode;
    getMixin(arg0: InjectionInfo): IMixinContext;
    getTargets(arg0: InjectionInfo): AbstractInsnNode[][];
    parseMemberInfo(arg0: string, arg1: InjectionInfo): MemberInfo;
    preInject(arg0: InjectionInfo): void;
}