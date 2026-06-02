import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class LockFreePrefixTree$FailedAllocationException extends RuntimeException {
    constructor()
    constructor(message: string)
    fillInStackTrace(): Throwable;
}