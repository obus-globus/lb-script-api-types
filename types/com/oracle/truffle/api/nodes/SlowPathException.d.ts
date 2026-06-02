import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SlowPathException extends Exception {
    constructor()
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable)
    fillInStackTrace(): Throwable;
}