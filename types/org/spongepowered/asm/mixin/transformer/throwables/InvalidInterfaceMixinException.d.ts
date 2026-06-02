import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { InvalidMixinException } from '../../../../../../org/spongepowered/asm/mixin/transformer/throwables/InvalidMixinException.d.ts'
export class InvalidInterfaceMixinException extends InvalidMixinException {
    constructor(arg0: IMixinInfo, arg1: string)
    constructor(arg0: IMixinInfo, arg1: string, arg2: Throwable)
    constructor(arg0: IMixinInfo, arg1: Throwable)
    constructor(arg0: IMixinContext, arg1: string)
    constructor(arg0: IMixinContext, arg1: string, arg2: Throwable)
    constructor(arg0: IMixinContext, arg1: Throwable)
}