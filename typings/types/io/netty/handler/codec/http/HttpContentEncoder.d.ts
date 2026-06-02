import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { EmbeddedChannel } from '../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { MessageToMessageCodec } from '../../../../../io/netty/handler/codec/MessageToMessageCodec.d.ts'
import type { HttpContent } from '../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpContentEncoder$Result } from '../../../../../io/netty/handler/codec/http/HttpContentEncoder$Result.d.ts'
import type { HttpContentEncoder$State } from '../../../../../io/netty/handler/codec/http/HttpContentEncoder$State.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class HttpContentEncoder extends MessageToMessageCodec<HttpRequest, HttpObject> {
    constructor()
    // private acceptEncodingQueue: CharSequence[];
    // private encoder: EmbeddedChannel;
    // private state: HttpContentEncoder$State;
    acceptOutboundMessage(arg0: Object): boolean;
    beginEncode(arg0: HttpResponse, arg1: string): HttpContentEncoder$Result;
    channelInactive(arg0: ChannelHandlerContext): void;
    // private cleanup(): void;
    // private cleanupSafely(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: HttpRequest, arg2: Object[]): void;
    // private encode(arg0: ByteBuf, arg1: Object[]): void;
    encode(arg0: ChannelHandlerContext, arg1: HttpObject, arg2: Object[]): void;
    // private encodeContent(arg0: HttpContent, arg1: Object[]): boolean;
    // private encodeFullResponse(arg0: HttpResponse, arg1: HttpContent, arg2: Object[]): void;
    // private fetchEncoderOutput(arg0: Object[]): void;
    // private finishEncode(arg0: Object[]): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
}