import type { AbstractChannel } from '../../../../io/netty/channel/AbstractChannel.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { LocalAddress } from '../../../../io/netty/channel/local/LocalAddress.d.ts'
import type { LocalChannel$State } from '../../../../io/netty/channel/local/LocalChannel$State.d.ts'
import type { LocalServerChannel } from '../../../../io/netty/channel/local/LocalServerChannel.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalChannel extends AbstractChannel {
    constructor()
    constructor(arg0: LocalServerChannel, arg1: LocalChannel)
    // private config: ChannelConfig;
    // private connectPromise: ChannelPromise;
    // private finishReadFuture: Future<Object>;
    // private inboundBuffer: Object[];
    // private localAddress: LocalAddress;
    // private peer: LocalChannel;
    // private readInProgress: boolean;
    // private readTask: () => void;
    // private registration: IoRegistration;
    // private remoteAddress: LocalAddress;
    // private shutdownHook: () => void;
    // private state: LocalChannel$State;
    // private writeInProgress: boolean;
    config(): ChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doDeregister(): void;
    doDisconnect(): void;
    doRegister(arg0: ChannelPromise): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    // private finishPeerRead(arg0: LocalChannel): void;
    // private finishPeerRead0(arg0: LocalChannel): void;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    localAddress(): LocalAddress;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    parent(): LocalServerChannel;
    // private readInbound(): void;
    // private releaseInboundBuffers(): void;
    remoteAddress(): LocalAddress;
    remoteAddress0(): SocketAddress;
    // private runFinishPeerReadTask(arg0: LocalChannel): void;
    // private tryClose(arg0: boolean): void;
}