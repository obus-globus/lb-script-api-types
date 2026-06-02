import type { SSLException } from '../../../../javax/net/ssl/SSLException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class NotSslRecordException extends SSLException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}