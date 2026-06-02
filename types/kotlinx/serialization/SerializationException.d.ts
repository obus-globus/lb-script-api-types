import type { IllegalArgumentException } from '../../java/lang/IllegalArgumentException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class SerializationException extends IllegalArgumentException {
    constructor()
    constructor(message: string | null)
    constructor(message: string | null, cause: Throwable | null)
    constructor(cause: Throwable | null)
}