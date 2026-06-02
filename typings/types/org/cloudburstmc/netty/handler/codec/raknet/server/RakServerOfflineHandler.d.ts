import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DatagramPacket } from '../../../../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { ThreadLocal } from '../../../../../../../java/lang/ThreadLocal.d.ts'
import type { InetSocketAddress } from '../../../../../../../java/net/InetSocketAddress.d.ts'
import type { SecureRandom } from '../../../../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakServerChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakServerChannel.d.ts'
import type { AdvancedChannelInboundHandler } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/AdvancedChannelInboundHandler.d.ts'
import type { RakServerOfflineHandler$PendingConnection } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/server/RakServerOfflineHandler$PendingConnection.d.ts'
export class RakServerOfflineHandler extends AdvancedChannelInboundHandler<DatagramPacket> {
    static NAME: string;
    constructor(arg0: RakServerChannel)
    // private channel: RakServerChannel;
    // private pendingConnections: Map<InetSocketAddress, RakServerOfflineHandler$PendingConnection>;
    // private random: ThreadLocal<SecureRandom>;
    acceptInboundMessage(arg0: ChannelHandlerContext, arg1: Object): boolean;
    channelRead0(arg0: ChannelHandlerContext, arg1: DatagramPacket): void;
    // private onOpenConnectionRequest1(arg0: ChannelHandlerContext, arg1: DatagramPacket, arg2: ByteBuf, arg3: number): void;
    // private onOpenConnectionRequest2(arg0: ChannelHandlerContext, arg1: DatagramPacket, arg2: ByteBuf, arg3: number): void;
    // private onUnconnectedPing(arg0: ChannelHandlerContext, arg1: DatagramPacket, arg2: ByteBuf, arg3: number): void;
    // private sendAlreadyConnected(arg0: ChannelHandlerContext, arg1: DatagramPacket, arg2: ByteBuf, arg3: number): void;
    // private sendIncompatibleVersion(arg0: ChannelHandlerContext, arg1: DatagramPacket, arg2: number, arg3: ByteBuf, arg4: number): void;
}