import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { SocketException } from '../../../java/net/SocketException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class AbstractChannel$AnnotatedSocketException extends SocketException {
    constructor(arg0: SocketException, arg1: SocketAddress)
    fillInStackTrace(): Throwable;
}