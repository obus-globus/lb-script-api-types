import type { ConnectException } from '../../../../java/net/ConnectException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ProxyConnectException extends ConnectException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}