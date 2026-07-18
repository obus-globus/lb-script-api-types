import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DefaultHttp2RemoteFlowController$FlowState } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController$FlowState.d.ts'
import type { DefaultHttp2RemoteFlowController$WritabilityMonitor } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2RemoteFlowController$WritabilityMonitor.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController.d.ts'
import type { Http2RemoteFlowController$FlowControlled } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$FlowControlled.d.ts'
import type { Http2RemoteFlowController$Listener } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController$Listener.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { StreamByteDistributor } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2RemoteFlowController extends Object implements Http2RemoteFlowController {
    constructor(arg0: Http2Connection)
    constructor(arg0: Http2Connection, arg1: Http2RemoteFlowController$Listener)
    constructor(arg0: Http2Connection, arg1: StreamByteDistributor)
    constructor(arg0: Http2Connection, arg1: StreamByteDistributor, arg2: Http2RemoteFlowController$Listener)
    // private connection: Http2Connection;
    // private connectionState: DefaultHttp2RemoteFlowController$FlowState;
    // private ctx: ChannelHandlerContext;
    // private initialWindowSize: number;
    // private monitor: DefaultHttp2RemoteFlowController$WritabilityMonitor;
    // private stateKey: Http2Connection$PropertyKey;
    // private streamByteDistributor: StreamByteDistributor;
    addFlowControlled(arg0: Http2Stream, arg1: Http2RemoteFlowController$FlowControlled): void;
    channelHandlerContext(): ChannelHandlerContext;
    channelHandlerContext(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(): void;
    // private connectionWindowSize(): number;
    hasFlowControlled(arg0: Http2Stream): boolean;
    incrementWindowSize(arg0: Http2Stream, arg1: number): void;
    initialWindowSize(): number;
    initialWindowSize(arg0: number): void;
    // private isChannelWritable(): boolean;
    // private isChannelWritable0(): boolean;
    isWritable(arg0: Http2Stream): boolean;
    listener(arg0: Http2RemoteFlowController$Listener): void;
    // private maxUsableChannelBytes(): number;
    // private minUsableChannelBytes(): number;
    // private state(arg0: Http2Stream): DefaultHttp2RemoteFlowController$FlowState;
    updateDependencyTree(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    windowSize(arg0: Http2Stream): number;
    // private writableBytes(): number;
    writePendingBytes(): void;
}