import type { SSLHandshakeException } from '../../../../javax/net/ssl/SSLHandshakeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class StacklessSSLHandshakeException extends SSLHandshakeException {
    private constructor(arg0: string)
    fillInStackTrace(): Throwable;
}