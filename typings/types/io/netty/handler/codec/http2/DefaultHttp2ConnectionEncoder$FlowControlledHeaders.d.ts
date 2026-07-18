import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { DefaultHttp2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2ConnectionEncoder.d.ts'
import type { DefaultHttp2ConnectionEncoder$FlowControlledBase } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2ConnectionEncoder$FlowControlledBase.d.ts'
import type { Http2RemoteFlowController$FlowControlled } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$FlowControlled.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class DefaultHttp2ConnectionEncoder$FlowControlledHeaders extends DefaultHttp2ConnectionEncoder$FlowControlledBase {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    constructor(null_: DefaultHttp2ConnectionEncoder, arg1: Http2Stream, arg2: (Object | null)[], arg3: boolean, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean, arg9: ChannelPromise)
    // private exclusive: boolean;
    // private hasPriority: boolean;
    // private headers: (Object | null)[];
    // private streamDependency: number;
    // private weight: number;
    error(arg0: ChannelHandlerContext, arg1: Throwable): void;
    merge(arg0: ChannelHandlerContext, arg1: Http2RemoteFlowController$FlowControlled): boolean;
    size(): number;
    write(arg0: ChannelHandlerContext, arg1: number): void;
}