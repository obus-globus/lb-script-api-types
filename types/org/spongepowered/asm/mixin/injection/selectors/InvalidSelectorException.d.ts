import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { MixinException } from '../../../../../../org/spongepowered/asm/mixin/throwables/MixinException.d.ts'
export class InvalidSelectorException extends MixinException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}