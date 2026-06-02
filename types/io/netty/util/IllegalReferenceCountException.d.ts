import type { IllegalStateException } from '../../../java/lang/IllegalStateException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class IllegalReferenceCountException extends IllegalStateException {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}