import type { NetherNetChannel } from '../../../../../dev/kastle/netty/channel/nethernet/NetherNetChannel.d.ts'
import type { NetherNetClientSignaling } from '../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling.d.ts'
import type { NetherNetSignaling$IceServerInfo } from '../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$IceServerInfo.d.ts'
import type { PeerConnectionFactory } from '../../../../../dev/kastle/webrtc/PeerConnectionFactory.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ScheduledFuture } from '../../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NetherNetClientChannel extends NetherNetChannel {
    constructor(arg0: NetherNetClientSignaling)
    constructor(arg0: PeerConnectionFactory, arg1: NetherNetClientSignaling)
    // private connectPromise: ChannelPromise;
    // private connectionId: number;
    // private factory: PeerConnectionFactory;
    // private handshakeComplete: boolean;
    // private handshakeTimeoutTask: ScheduledFuture<Object>;
    // private retryCount: number;
    // private signaling: NetherNetClientSignaling;
    readonly targetNetworkId: string;
    // private createAndSendOffer(): void;
    // private cycleConnectionId(): number;
    doClose(): void;
    // private handleSignal(arg0: string): void;
    // private initWebRTC(arg0: NetherNetSignaling$IceServerInfo[]): void;
    isActive(): boolean;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
    // private resetAndRetryHandshake(): void;
    setTargetNetworkId(arg0: string): void;
    // private setupDataChannels(): void;
    // private startHandshake(): void;
}