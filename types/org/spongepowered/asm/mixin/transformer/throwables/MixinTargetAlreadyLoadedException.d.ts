import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InvalidMixinException } from '../../../../../../org/spongepowered/asm/mixin/transformer/throwables/InvalidMixinException.d.ts'
export class MixinTargetAlreadyLoadedException extends InvalidMixinException {
    constructor(arg0: IMixinInfo, arg1: string, arg2: string)
    constructor(arg0: IMixinInfo, arg1: string, arg2: string, arg3: Throwable)
    readonly target: string;
    getTarget(): string;
}