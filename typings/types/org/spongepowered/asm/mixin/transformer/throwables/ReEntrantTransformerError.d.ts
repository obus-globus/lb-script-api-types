import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { MixinTransformerError } from '../../../../../../org/spongepowered/asm/mixin/transformer/throwables/MixinTransformerError.d.ts'
export class ReEntrantTransformerError extends MixinTransformerError {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}