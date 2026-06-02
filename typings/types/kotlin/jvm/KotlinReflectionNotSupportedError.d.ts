import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Error } from '../../java/lang/Error.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class KotlinReflectionNotSupportedError extends Error implements Serializable {
    constructor()
    constructor(message: string | null)
    constructor(message: string | null, cause: Throwable | null)
    constructor(cause: Throwable | null)
}