import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DecoratingHttp2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/DecoratingHttp2ConnectionEncoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { StreamBufferingEncoder$GoAwayDetail } from '../../../../../io/netty/handler/codec/http2/StreamBufferingEncoder$GoAwayDetail.d.ts'
import type { StreamBufferingEncoder$PendingStream } from '../../../../../io/netty/handler/codec/http2/StreamBufferingEncoder$PendingStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StreamBufferingEncoder extends DecoratingHttp2ConnectionEncoder {
    constructor(arg0: Http2ConnectionEncoder)
    constructor(arg0: Http2ConnectionEncoder, arg1: number)
    // private closed: boolean;
    // private goAwayDetail: StreamBufferingEncoder$GoAwayDetail;
    // private maxConcurrentStreams: number;
    // private pendingStreams: JavaMap<number, StreamBufferingEncoder$PendingStream>;
    // private canCreateStream(): boolean;
    // private cancelGoAwayStreams(arg0: StreamBufferingEncoder$GoAwayDetail): void;
    close(): void;
    // private isExistingStream(arg0: number): boolean;
    numBufferedStreams(): number;
    remoteSettings(arg0: JavaMap<any, any>): void;
    // private tryCreatePendingStreams(): void;
    // private updateMaxConcurrentStreams(): void;
    writeData(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean, arg5: ChannelPromise): ChannelFuture;
    writeHeaders(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean, arg8: ChannelPromise): ChannelFuture;
    // private writeHeaders0(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean, arg9: ChannelPromise): ChannelFuture;
    writeRstStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
    writeSettingsAck(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFuture;
}