import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2FrameStreamVisitor } from '../../../../../io/netty/handler/codec/http2/Http2FrameStreamVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractHttp2StreamChannel$UserEventStreamVisitor extends Object implements Http2FrameStreamVisitor {
    constructor(arg0: Object)
    // private event: Object;
    visit(arg0: Http2FrameStream): boolean;
}