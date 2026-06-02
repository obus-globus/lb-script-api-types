import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { EmbeddedChannel } from '../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { MessageToMessageDecoder } from '../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { HttpContentDecoder$ByteBufForwarder } from '../../../../../io/netty/handler/codec/http/HttpContentDecoder$ByteBufForwarder.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class HttpContentDecoder extends MessageToMessageDecoder<HttpObject> {
    constructor()
    // private continueResponse: boolean;
    // private ctx: ChannelHandlerContext;
    // private decoder: EmbeddedChannel;
    // private forwarder: HttpContentDecoder$ByteBufForwarder;
    // private needRead: boolean;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    // private cleanup(): void;
    // private cleanupSafely(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: HttpObject, arg2: Object[]): void;
    getTargetContentEncoding(arg0: string): string;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    newContentDecoder(arg0: string): EmbeddedChannel;
}