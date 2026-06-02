import type { IllegalArgumentException } from '../../../../../java/lang/IllegalArgumentException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class InvalidConstraintException extends IllegalArgumentException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}