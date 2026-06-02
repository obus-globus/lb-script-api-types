import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ModResolutionException extends Exception {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Object[])
    constructor(arg0: string, arg1: Throwable)
}