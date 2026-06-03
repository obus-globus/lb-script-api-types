import type { DefaultNetherChannelConfig } from '../../../../../dev/kastle/netty/channel/nethernet/config/DefaultNetherChannelConfig.d.ts'
import type { RTCDataChannel } from '../../../../../dev/kastle/webrtc/RTCDataChannel.d.ts'
import type { RTCPeerConnection } from '../../../../../dev/kastle/webrtc/RTCPeerConnection.d.ts'
import type { AbstractChannel } from '../../../../../io/netty/channel/AbstractChannel.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOutboundBuffer } from '../../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NetherNetChannel extends AbstractChannel {
    constructor(arg0: Channel, arg1: InetSocketAddress, arg2: InetSocketAddress)
    // private config: DefaultNetherChannelConfig;
    // private localAddress: SocketAddress;
    open: boolean;
    // private peerConnection: RTCPeerConnection;
    // private pendingWrites: Object[];
    // private reliableChannel: RTCDataChannel;
    // private remoteAddress: SocketAddress;
    // private unreliableChannel: RTCDataChannel;
    config(): ChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    doDeregister(): void;
    doDisconnect(): void;
    doRegister(): void;
    doRegister(arg0: ChannelPromise): void;
    doWrite(arg0: ChannelOutboundBuffer): void;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
    // private onDataChannelStateChange(): void;
    remoteAddress0(): SocketAddress;
    setDataChannels(arg0: RTCDataChannel, arg1: RTCDataChannel): void;
    // private writeInternal(arg0: Object): void;
}