import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2FrameStreamVisitor extends Object{
    visit(arg0: Http2FrameStream): boolean;
}