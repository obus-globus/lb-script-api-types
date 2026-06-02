import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { InvalidSelectorException } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/InvalidSelectorException.d.ts'
export class TargetNotSupportedException extends InvalidSelectorException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}