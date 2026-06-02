import type { JwtException } from '../../../io/jsonwebtoken/JwtException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class SecurityException extends JwtException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
}