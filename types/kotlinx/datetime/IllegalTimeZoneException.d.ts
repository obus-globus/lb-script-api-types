import type { IllegalArgumentException } from '../../java/lang/IllegalArgumentException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class IllegalTimeZoneException extends IllegalArgumentException {
    constructor()
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    constructor(cause: Throwable)
}