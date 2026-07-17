import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpdyHttpDecoder extends MessageToMessageDecoder<SpdyFrame> {
    constructor(arg0: SpdyVersion, arg1: number)
    constructor(arg0: SpdyVersion, arg1: number, arg2: boolean)
    constructor(arg0: SpdyVersion, arg1: number, arg2: JavaMap<number, FullHttpMessage>)
    constructor(arg0: SpdyVersion, arg1: number, arg2: JavaMap<number, FullHttpMessage>, arg3: HttpHeadersFactory, arg4: HttpHeadersFactory)
    constructor(arg0: SpdyVersion, arg1: number, arg2: JavaMap<number, FullHttpMessage>, arg3: boolean)
    // private headersFactory: HttpHeadersFactory;
    // private maxContentLength: number;
    // private messageMap: JavaMap<number, FullHttpMessage>;
    // private spdyVersion: number;
    // private trailersFactory: HttpHeadersFactory;
    channelInactive(arg0: ChannelHandlerContext): void;
    // private createHttpResponse(arg0: SpdyHeadersFrame, arg1: ByteBufAllocator): FullHttpResponse;
    decode(arg0: ChannelHandlerContext, arg1: SpdyFrame, arg2: Object[]): void;
    getMessage(arg0: number): FullHttpMessage;
    putMessage(arg0: number, arg1: FullHttpMessage): FullHttpMessage;
    removeMessage(arg0: number): FullHttpMessage;
}