import type { Error } from '../../java/lang/Error.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class CoroutinesInternalError extends Error {
    constructor(message: string, cause: Throwable)
}