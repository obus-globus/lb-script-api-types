import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ISliceContext } from '../../../../../../org/spongepowered/asm/mixin/injection/code/ISliceContext.d.ts'
import type { InvalidInjectionException } from '../../../../../../org/spongepowered/asm/mixin/injection/throwables/InvalidInjectionException.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
export class InvalidSliceException extends InvalidInjectionException {
    constructor(arg0: ISliceContext, arg1: string)
    constructor(arg0: ISliceContext, arg1: string, arg2: Throwable)
    constructor(arg0: ISliceContext, arg1: Throwable)
    constructor(arg0: IMixinContext, arg1: string)
    constructor(arg0: IMixinContext, arg1: string, arg2: Throwable)
    constructor(arg0: IMixinContext, arg1: Throwable)
}