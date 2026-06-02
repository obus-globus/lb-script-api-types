import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { FileRegion } from '../../../../../io/netty/channel/FileRegion.d.ts'
import type { MessageToMessageEncoder } from '../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { HttpContent } from '../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class HttpObjectEncoder<H extends HttpMessage> extends MessageToMessageEncoder<Object> {
    constructor()
    // private headersEncodedSizeAccumulator: number;
    // private out: Object[];
    // private state: number;
    // private trailersEncodedSizeAccumulator: number;
    acceptOutboundMessage(arg0: Object): boolean;
    encode(arg0: ChannelHandlerContext, arg1: Object, arg2: Object[]): void;
    // private encodeByteBufAndTrailers(arg0: number, arg1: ChannelHandlerContext, arg2: Object[], arg3: ByteBuf, arg4: Map$Entry<string, string>[]): void;
    // private encodeByteBufContent(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private encodeByteBufHttpContent(arg0: number, arg1: ChannelHandlerContext, arg2: ByteBuf, arg3: ByteBuf, arg4: Map$Entry<string, string>[], arg5: Object[]): void;
    // private encodeChunkedHttpContent(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Map$Entry<string, string>[], arg3: Object[]): void;
    // private encodeFileRegionContent(arg0: ChannelHandlerContext, arg1: FileRegion, arg2: Object[]): void;
    // private encodeFullHttpMessage(arg0: ChannelHandlerContext, arg1: Object, arg2: Object[]): void;
    encodeHeaders(arg0: Map$Entry<string, string>[], arg1: ByteBuf): void;
    // private encodeHttpContent(arg0: ChannelHandlerContext, arg1: HttpContent, arg2: Object[]): void;
    // private encodeHttpMessageLastContent(arg0: ChannelHandlerContext, arg1: H, arg2: Object[]): void;
    // private encodeHttpMessageNotLastContent(arg0: ChannelHandlerContext, arg1: H, arg2: Object[]): void;
    // private encodeInitHttpMessage(arg0: ChannelHandlerContext, arg1: H): ByteBuf;
    encodeInitialLine(arg0: ByteBuf, arg1: H): void;
    // private encodeJustHttpMessage(arg0: ChannelHandlerContext, arg1: H, arg2: Object[]): void;
    // private encodeLastHttpContent(arg0: ChannelHandlerContext, arg1: LastHttpContent, arg2: Object[]): void;
    // private encodeNotHttpMessageContentTypes(arg0: ChannelHandlerContext, arg1: Object, arg2: Object[]): void;
    // private encodeTrailingHeaders(arg0: ChannelHandlerContext, arg1: Map$Entry<string, string>[], arg2: Object[]): void;
    isContentAlwaysEmpty(arg0: H): boolean;
    sanitizeHeadersBeforeEncode(arg0: H, arg1: boolean): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}