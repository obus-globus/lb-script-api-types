import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SurfaceException extends Exception {
    constructor(message: string)
    constructor(cause: Throwable)
}