import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { IActivityContext } from '../../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { InvalidMixinException } from '../../../../../../org/spongepowered/asm/mixin/transformer/throwables/InvalidMixinException.d.ts'
export class InvalidInjectionException extends InvalidMixinException {
    constructor(arg0: ISelectorContext, arg1: string)
    constructor(arg0: ISelectorContext, arg1: string, arg2: Throwable)
    constructor(arg0: ISelectorContext, arg1: string, arg2: Throwable, arg3: IActivityContext)
    constructor(arg0: ISelectorContext, arg1: string, arg2: IActivityContext)
    constructor(arg0: ISelectorContext, arg1: Throwable)
    constructor(arg0: ISelectorContext, arg1: Throwable, arg2: IActivityContext)
    constructor(arg0: IMixinContext, arg1: string)
    constructor(arg0: IMixinContext, arg1: string, arg2: Throwable)
    constructor(arg0: IMixinContext, arg1: string, arg2: Throwable, arg3: IActivityContext)
    constructor(arg0: IMixinContext, arg1: string, arg2: IActivityContext)
    constructor(arg0: IMixinContext, arg1: Throwable)
    constructor(arg0: IMixinContext, arg1: Throwable, arg2: IActivityContext)
    // private selectorContext: ISelectorContext;
    getContext(): ISelectorContext;
}