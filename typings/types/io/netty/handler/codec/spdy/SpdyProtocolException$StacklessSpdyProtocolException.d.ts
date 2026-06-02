import type { SpdyProtocolException } from '../../../../../io/netty/handler/codec/spdy/SpdyProtocolException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class SpdyProtocolException$StacklessSpdyProtocolException extends SpdyProtocolException {
    constructor(arg0: string, arg1: boolean)
    fillInStackTrace(): Throwable;
}