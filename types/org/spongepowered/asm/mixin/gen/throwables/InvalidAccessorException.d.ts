import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { AccessorInfo } from '../../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
import type { InvalidMixinException } from '../../../../../../org/spongepowered/asm/mixin/transformer/throwables/InvalidMixinException.d.ts'
export class InvalidAccessorException extends InvalidMixinException {
    constructor(arg0: AccessorInfo, arg1: string)
    constructor(arg0: AccessorInfo, arg1: string, arg2: Throwable)
    constructor(arg0: AccessorInfo, arg1: Throwable)
    constructor(arg0: IMixinContext, arg1: string)
    constructor(arg0: IMixinContext, arg1: string, arg2: Throwable)
    constructor(arg0: IMixinContext, arg1: Throwable)
    // private info: AccessorInfo;
    getAccessorInfo(): AccessorInfo;
}