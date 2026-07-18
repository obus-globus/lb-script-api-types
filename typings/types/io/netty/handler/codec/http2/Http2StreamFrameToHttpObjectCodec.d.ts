import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageCodec } from '../../../../../io/netty/handler/codec/MessageToMessageCodec.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2StreamFrameToHttpObjectCodec extends MessageToMessageCodec<Http2StreamFrame, HttpObject> {
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: boolean)
    // private isServer: boolean;
    // private validateHeaders: boolean;
    acceptInboundMessage(arg0: Object): boolean;
    decode(arg0: ChannelHandlerContext, arg1: Http2StreamFrame, arg2: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: HttpObject, arg2: Object[]): void;
    // private encodeLastContent(arg0: LastHttpContent, arg1: Object[]): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    isSsl(arg0: ChannelHandlerContext): boolean;
    // private newFullMessage(arg0: number, arg1: (Object | null)[], arg2: ByteBufAllocator): FullHttpMessage;
    // private newMessage(arg0: number, arg1: (Object | null)[]): HttpMessage;
    // private toHttp2Headers(arg0: ChannelHandlerContext, arg1: HttpMessage): (Object | null)[];
}