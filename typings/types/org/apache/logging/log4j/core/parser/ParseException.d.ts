import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class ParseException extends Exception {
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable)
}