import type { Http2Error } from '../../../../../io/netty/handler/codec/http2/Http2Error.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Http2FrameStreamException extends Exception {
    constructor(arg0: Http2FrameStream, arg1: Http2Error, arg2: Throwable)
    // private error: Http2Error;
    // private stream: Http2FrameStream;
    error(): Http2Error;
    stream(): Http2FrameStream;
}