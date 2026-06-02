import type { CancellationException } from '../../../../../java/util/concurrent/CancellationException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ParseCancellationException extends CancellationException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}