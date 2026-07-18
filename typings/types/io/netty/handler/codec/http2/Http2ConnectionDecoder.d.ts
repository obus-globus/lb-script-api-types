import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
import type { Http2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/Http2LocalFlowController.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2ConnectionDecoder extends Closeable, Object{
    close(): void;
    connection(): Http2Connection;
    decodeFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    flowController(): Http2LocalFlowController;
    frameListener(): Http2FrameListener;
    frameListener(arg0: Http2FrameListener): void;
    lifecycleManager(arg0: Http2LifecycleManager): void;
    localSettings(): JavaMap<any, any>;
    prefaceReceived(): boolean;
}