import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { SpdySynStreamFrame } from '../../../../../io/netty/handler/codec/spdy/SpdySynStreamFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpdyHttpEncoder extends MessageToMessageEncoder<HttpObject> {
    constructor(arg0: SpdyVersion)
    constructor(arg0: SpdyVersion, arg1: boolean, arg2: boolean)
    // private currentStreamId: number;
    // private headersToLowerCase: boolean;
    // private validateHeaders: boolean;
    // private createHeadersFrame(arg0: HttpResponse): SpdyHeadersFrame;
    // private createSynStreamFrame(arg0: HttpRequest): SpdySynStreamFrame;
    encode(arg0: ChannelHandlerContext, arg1: HttpObject, arg2: Object[]): void;
}