import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { ITargetSelector } from '../../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { MixinException } from '../../../../../../../org/spongepowered/asm/mixin/throwables/MixinException.d.ts'
export class SelectorException extends MixinException {
    constructor(arg0: ITargetSelector, arg1: string)
    constructor(arg0: ITargetSelector, arg1: string, arg2: Throwable)
    constructor(arg0: ITargetSelector, arg1: Throwable)
    readonly selector: ITargetSelector;
    getSelector(): ITargetSelector;
}