import type { MixinVersion } from '../../../../com/llamalad7/mixinextras/versions/MixinVersion.d.ts'
import type { MixinVersionImpl_v0_8_6 } from '../../../../com/llamalad7/mixinextras/versions/MixinVersionImpl_v0_8_6.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class MixinVersionImpl_v0_8_7 extends MixinVersionImpl_v0_8_6 {
    static getInstance(): MixinVersion;
    constructor()
    getOrder(arg0: InjectionInfo): number;
}