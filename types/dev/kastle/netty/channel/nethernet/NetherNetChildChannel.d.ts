import type { NetherNetChannel } from '../../../../../dev/kastle/netty/channel/nethernet/NetherNetChannel.d.ts'
import type { RTCPeerConnection } from '../../../../../dev/kastle/webrtc/RTCPeerConnection.d.ts'
import type { AbstractChannel$AbstractUnsafe } from '../../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
export class NetherNetChildChannel extends NetherNetChannel {
    constructor(arg0: Channel, arg1: RTCPeerConnection, arg2: InetSocketAddress, arg3: InetSocketAddress)
    doBind(arg0: SocketAddress): void;
    newUnsafe(): AbstractChannel$AbstractUnsafe;
}