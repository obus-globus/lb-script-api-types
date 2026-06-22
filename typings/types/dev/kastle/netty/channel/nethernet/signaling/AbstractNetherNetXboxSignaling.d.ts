import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { NetherNetClientSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling.d.ts'
import type { NetherNetClientSignaling$NotFoundHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling$NotFoundHandler.d.ts'
import type { NetherNetServerSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling.d.ts'
import type { NetherNetServerSignaling$NewConnectionHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$NewConnectionHandler.d.ts'
import type { NetherNetServerSignaling$PongData } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$PongData.d.ts'
import type { NetherNetSignaling$IceServerInfo } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$IceServerInfo.d.ts'
import type { NetherNetSignaling$SignalHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$SignalHandler.d.ts'
import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { TextWebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/TextWebSocketFrame.d.ts'
import type { InternalLogger } from '../../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractNetherNetXboxSignaling extends SimpleChannelInboundHandler<TextWebSocketFrame> implements NetherNetClientSignaling, NetherNetServerSignaling {
    constructor(arg0: string, arg1: string, arg2: URI)
    // private channel: Channel;
    // private connectFuture: CompletableFuture<NetherNetSignaling$IceServerInfo[]>;
    // private eventLoopGroup: (Object | null)[];
    // private handlers: { [key: number]: (param0: string) => void };
    iceServers: NetherNetSignaling$IceServerInfo[];
    readonly localNetworkId: string;
    // private log: InternalLogger;
    newConnectionHandler: (param0: number, param1: string, param2: string) => void;
    notFoundHandler: (param0: string) => void;
    // private uri: URI;
    // private xboxToken: string;
    bind(arg0: SocketAddress): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    close(): void;
    connect(arg0: SocketAddress): CompletableFuture<NetherNetSignaling$IceServerInfo[]>;
    connectInternal(): CompletableFuture<NetherNetSignaling$IceServerInfo[]>;
    dispatchSignalToPipeline(arg0: string, arg1: string): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    getIceServers(): NetherNetSignaling$IceServerInfo[];
    getLocalNetworkId(): string;
    onConnected(arg0: ChannelHandlerContext): void;
    parseTurnServers(arg0: JsonObject): NetherNetSignaling$IceServerInfo[];
    removeSignalHandler(arg0: number): void;
    sendSignal(arg0: string, arg1: string): void;
    setAdvertisementData(arg0: NetherNetServerSignaling$PongData): void;
    setNewConnectionHandler(arg0: (param0: number, param1: string, param2: string) => void): void;
    setNotFoundHandler(arg0: (param0: string) => void): void;
    setSignalHandler(arg0: number, arg1: (param0: string) => void): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}