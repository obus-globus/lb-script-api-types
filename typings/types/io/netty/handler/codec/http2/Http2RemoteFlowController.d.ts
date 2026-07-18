import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2FlowController } from '../../../../../io/netty/handler/codec/http2/Http2FlowController.d.ts'
import type { Http2RemoteFlowController$FlowControlled } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$FlowControlled.d.ts'
import type { Http2RemoteFlowController$Listener } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$Listener.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2RemoteFlowController extends Http2FlowController, Object{
    addFlowControlled(arg0: Http2Stream, arg1: Http2RemoteFlowController$FlowControlled): void;
    channelHandlerContext(arg0: ChannelHandlerContext): void;
    channelHandlerContext(): ChannelHandlerContext;
    channelWritabilityChanged(): void;
    hasFlowControlled(arg0: Http2Stream): boolean;
    incrementWindowSize(arg0: Http2Stream, arg1: number): void;
    initialWindowSize(): number;
    initialWindowSize(arg0: number): void;
    isWritable(arg0: Http2Stream): boolean;
    listener(arg0: Http2RemoteFlowController$Listener): void;
    updateDependencyTree(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    windowSize(arg0: Http2Stream): number;
    writePendingBytes(): void;
}