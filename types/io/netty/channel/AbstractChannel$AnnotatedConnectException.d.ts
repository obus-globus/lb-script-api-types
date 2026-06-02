import type { ConnectException } from '../../../java/net/ConnectException.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class AbstractChannel$AnnotatedConnectException extends ConnectException {
    constructor(arg0: ConnectException, arg1: SocketAddress)
    fillInStackTrace(): Throwable;
}