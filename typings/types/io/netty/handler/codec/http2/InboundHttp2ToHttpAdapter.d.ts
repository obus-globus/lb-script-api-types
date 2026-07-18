import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2EventAdapter } from '../../../../../io/netty/handler/codec/http2/Http2EventAdapter.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { InboundHttp2ToHttpAdapter$ImmediateSendDetector } from '../../../../../io/netty/handler/codec/http2/InboundHttp2ToHttpAdapter$ImmediateSendDetector.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InboundHttp2ToHttpAdapter extends Http2EventAdapter {
    constructor(arg0: Http2Connection, arg1: number, arg2: boolean, arg3: boolean)
    // private connection: Http2Connection;
    // private maxContentLength: number;
    // private messageKey: Http2Connection$PropertyKey;
    // private propagateSettings: boolean;
    // private sendDetector: InboundHttp2ToHttpAdapter$ImmediateSendDetector;
    // private validateHttpHeaders: boolean;
    fireChannelRead(arg0: ChannelHandlerContext, arg1: FullHttpMessage, arg2: boolean, arg3: Http2Stream): void;
    getMessage(arg0: Http2Stream): FullHttpMessage;
    newMessage(arg0: Http2Stream, arg1: (Object | null)[], arg2: boolean, arg3: ByteBufAllocator): FullHttpMessage;
    onDataRead(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean): number;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean): void;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean): void;
    onPushPromiseRead(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: (Object | null)[], arg4: number): void;
    onRstStreamRead(arg0: ChannelHandlerContext, arg1: number, arg2: number): void;
    onRstStreamRead(arg0: Http2Stream, arg1: FullHttpMessage): void;
    onSettingsRead(arg0: ChannelHandlerContext, arg1: JavaMap<any, any>): void;
    onStreamRemoved(arg0: Http2Stream): void;
    processHeadersBegin(arg0: ChannelHandlerContext, arg1: Http2Stream, arg2: (Object | null)[], arg3: boolean, arg4: boolean, arg5: boolean): FullHttpMessage;
    // private processHeadersEnd(arg0: ChannelHandlerContext, arg1: Http2Stream, arg2: FullHttpMessage, arg3: boolean): void;
    putMessage(arg0: Http2Stream, arg1: FullHttpMessage): void;
    removeMessage(arg0: Http2Stream, arg1: boolean): void;
}