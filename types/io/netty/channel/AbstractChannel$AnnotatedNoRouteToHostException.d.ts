import type { NoRouteToHostException } from '../../../java/net/NoRouteToHostException.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class AbstractChannel$AnnotatedNoRouteToHostException extends NoRouteToHostException {
    constructor(arg0: NoRouteToHostException, arg1: SocketAddress)
    fillInStackTrace(): Throwable;
}