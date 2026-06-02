import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { IActivityContext } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext.d.ts'
export class MixinException extends RuntimeException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: string, arg1: Throwable, arg2: IActivityContext)
    constructor(arg0: string, arg1: IActivityContext)
    constructor(arg0: Throwable)
    constructor(arg0: Throwable, arg1: IActivityContext)
    // private activityDescriptor: string;
    readonly message: string | null;
    prepend(arg0: IActivityContext): void;
}