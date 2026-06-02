import type { AuthenticationException } from '../../../../com/mojang/authlib/exceptions/AuthenticationException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class InvalidCredentialsException extends AuthenticationException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}