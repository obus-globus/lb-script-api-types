import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InvalidInjectionException } from '../../../../../../org/spongepowered/asm/mixin/injection/throwables/InvalidInjectionException.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
export class InvalidInjectionPointException extends InvalidInjectionException {
    constructor(arg0: InjectionInfo, arg1: string, ...arg2: Object[])
    constructor(arg0: InjectionInfo, arg1: Throwable, arg2: string, ...arg3: Object[])
    constructor(arg0: IMixinContext, arg1: string, ...arg2: Object[])
    constructor(arg0: IMixinContext, arg1: Throwable, arg2: string, ...arg3: Object[])
}