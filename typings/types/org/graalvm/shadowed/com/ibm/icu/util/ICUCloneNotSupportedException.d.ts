import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { ICUException } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ICUException.d.ts'
export class ICUCloneNotSupportedException extends ICUException {
    constructor()
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable)
}