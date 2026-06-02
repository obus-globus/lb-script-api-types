import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ExecutionException extends Exception {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}