import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { MixinException } from '../../../../../../org/spongepowered/asm/mixin/throwables/MixinException.d.ts'
export class MixinReloadException extends MixinException {
    constructor(arg0: IMixinInfo, arg1: string)
    readonly mixinInfo: IMixinInfo;
    getMixinInfo(): IMixinInfo;
}