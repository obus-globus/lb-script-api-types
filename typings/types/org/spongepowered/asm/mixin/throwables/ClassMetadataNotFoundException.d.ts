import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { IActivityContext } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext.d.ts'
import type { MixinException } from '../../../../../org/spongepowered/asm/mixin/throwables/MixinException.d.ts'
export class ClassMetadataNotFoundException extends MixinException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: string, arg1: Throwable, arg2: IActivityContext)
    constructor(arg0: string, arg1: IActivityContext)
    constructor(arg0: Throwable)
    constructor(arg0: Throwable, arg1: IActivityContext)
}