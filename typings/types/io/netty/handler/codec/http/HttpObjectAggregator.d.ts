import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageAggregator } from '../../../../../io/netty/handler/codec/MessageAggregator.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { HttpContent } from '../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class HttpObjectAggregator extends MessageAggregator<HttpObject, HttpMessage, HttpContent, FullHttpMessage> {
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private closeOnExpectationFailed: boolean;
    aggregate(arg0: FullHttpMessage, arg1: HttpContent): void;
    beginAggregation(arg0: HttpMessage, arg1: ByteBuf): FullHttpMessage;
    closeAfterContinueResponse(arg0: Object): boolean;
    finishAggregation(arg0: FullHttpMessage): void;
    handleOversizedMessage(arg0: ChannelHandlerContext, arg1: HttpMessage): void;
    ignoreContentAfterContinueResponse(arg0: Object): boolean;
    isAggregated(arg0: HttpObject): boolean;
    isContentLengthInvalid(arg0: HttpMessage, arg1: number): boolean;
    isContentMessage(arg0: HttpObject): boolean;
    isLastContentMessage(arg0: HttpContent): boolean;
    isStartMessage(arg0: HttpObject): boolean;
    newContinueResponse(arg0: HttpMessage, arg1: number, arg2: Map$Entry<string, ChannelHandler>[]): Object;
}