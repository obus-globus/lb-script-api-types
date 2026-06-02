import type { Error } from '../../../../../java/lang/Error.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class MixinError extends Error {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}