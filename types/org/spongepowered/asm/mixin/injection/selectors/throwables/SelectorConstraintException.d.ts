import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { ITargetSelector } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { SelectorException } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/throwables/SelectorException.d.ts'
export class SelectorConstraintException extends SelectorException {
    constructor(arg0: ITargetSelector, arg1: string)
    constructor(arg0: ITargetSelector, arg1: string, arg2: Throwable)
    constructor(arg0: ITargetSelector, arg1: Throwable)
}