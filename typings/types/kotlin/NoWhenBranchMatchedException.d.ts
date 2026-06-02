import type { Serializable } from '../java/io/Serializable.d.ts'
import type { RuntimeException } from '../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class NoWhenBranchMatchedException extends RuntimeException implements Serializable {
    constructor()
    constructor(message: string | null)
    constructor(message: string | null, cause: Throwable | null)
    constructor(cause: Throwable | null)
}