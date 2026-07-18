import type { AbstractHttp2StreamFrame } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamFrame.d.ts'
import type { Http2Error } from '../../../../../io/netty/handler/codec/http2/Http2Error.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2ResetFrame } from '../../../../../io/netty/handler/codec/http2/Http2ResetFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2ResetFrame extends AbstractHttp2StreamFrame implements Http2ResetFrame {
    constructor(arg0: Http2Error)
    constructor(arg0: number)
    // private errorCode: number;
    equals(arg0: Object | null): boolean;
    errorCode(): number;
    hashCode(): number;
    name(): string;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): DefaultHttp2ResetFrame;
    toString(): string;
}