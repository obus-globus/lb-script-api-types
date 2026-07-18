import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ConcurrentIOException extends IllegalStateException {
    constructor(taskName: string, cause: Throwable | null)
}