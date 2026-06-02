import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class InvalidFormatException extends Exception {
    constructor()
    constructor(message: string)
    constructor(cause: Throwable)
}