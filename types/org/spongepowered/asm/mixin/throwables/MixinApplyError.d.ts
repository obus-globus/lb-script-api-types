import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { MixinError } from '../../../../../org/spongepowered/asm/mixin/throwables/MixinError.d.ts'
export class MixinApplyError extends MixinError {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}