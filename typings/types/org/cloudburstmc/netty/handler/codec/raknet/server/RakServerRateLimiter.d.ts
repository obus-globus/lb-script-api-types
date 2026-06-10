import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { DatagramPacket } from '../../../../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { ScheduledFuture } from '../../../../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { InetAddress } from '../../../../../../../java/net/InetAddress.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakServerChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakServerChannel.d.ts'
export class RakServerRateLimiter extends SimpleChannelInboundHandler<DatagramPacket> {
    static NAME: string;
    constructor(arg0: RakServerChannel)
    // private blockedConnections: Map<InetAddress, number>;
    // private blockedTickFuture: ScheduledFuture<Object>;
    // private channel: RakServerChannel;
    // private exceptions: InetAddress[];
    // private globalCounter: AtomicLong;
    // private rateLimitMap: Map<InetAddress, AtomicInteger>;
    // private tickFuture: ScheduledFuture<Object>;
    addException(arg0: InetAddress): void;
    blockAddress(arg0: InetAddress, arg1: number, arg2: TimeUnit): boolean;
    channelRead0(arg0: ChannelHandlerContext, arg1: DatagramPacket): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    isAddressBlocked(arg0: InetAddress): boolean;
    // private onBlockedTick(): void;
    // private onRakTick(): void;
    removeException(arg0: InetAddress): void;
    unblockAddress(arg0: InetAddress): void;
}