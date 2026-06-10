import type { MixinVersion } from '../../../../com/llamalad7/mixinextras/versions/MixinVersion.d.ts'
import type { MixinVersionImpl_v0_8_4 } from '../../../../com/llamalad7/mixinextras/versions/MixinVersionImpl_v0_8_4.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class MixinVersionImpl_v0_8_6 extends MixinVersionImpl_v0_8_4 {
    static getInstance(): MixinVersion;
    constructor()
    getTargets(arg0: InjectionInfo): AbstractInsnNode[][];
}