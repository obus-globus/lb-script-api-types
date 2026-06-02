import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class JwtException extends RuntimeException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
}