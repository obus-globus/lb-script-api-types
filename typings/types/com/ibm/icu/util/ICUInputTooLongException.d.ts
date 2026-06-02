import type { ICUException } from '../../../../com/ibm/icu/util/ICUException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ICUInputTooLongException extends ICUException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}