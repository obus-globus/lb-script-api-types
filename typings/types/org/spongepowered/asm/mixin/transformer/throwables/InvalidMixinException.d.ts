import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { IActivityContext } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext.d.ts'
import type { IMixinInfo } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { MixinException } from '../../../../../../org/spongepowered/asm/mixin/throwables/MixinException.d.ts'
export class InvalidMixinException extends MixinException {
    constructor(arg0: IMixinInfo, arg1: string)
    constructor(arg0: IMixinInfo, arg1: string, arg2: Throwable)
    constructor(arg0: IMixinInfo, arg1: string, arg2: Throwable, arg3: IActivityContext)
    constructor(arg0: IMixinInfo, arg1: string, arg2: IActivityContext)
    constructor(arg0: IMixinInfo, arg1: Throwable)
    constructor(arg0: IMixinInfo, arg1: Throwable, arg2: IActivityContext)
    constructor(arg0: IMixinContext, arg1: string)
    constructor(arg0: IMixinContext, arg1: string, arg2: Throwable)
    constructor(arg0: IMixinContext, arg1: string, arg2: Throwable, arg3: IActivityContext)
    constructor(arg0: IMixinContext, arg1: string, arg2: IActivityContext)
    constructor(arg0: IMixinContext, arg1: Throwable)
    constructor(arg0: IMixinContext, arg1: Throwable, arg2: IActivityContext)
    readonly mixin: IMixinInfo;
    getMixin(): IMixinInfo;
}