import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { InvalidSelectorException } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/InvalidSelectorException.d.ts'
export class InvalidMemberDescriptorException extends InvalidSelectorException {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Throwable)
    constructor(arg0: string, arg1: Throwable)
    readonly input: string;
    getInput(): string;
}