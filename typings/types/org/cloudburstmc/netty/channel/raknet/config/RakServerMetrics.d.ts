import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RakServerMetrics extends Object{
    addressBlocked(arg0: InetAddress): void;
    addressUnblocked(arg0: InetAddress): void;
    channelClose(arg0: InetSocketAddress): void;
    channelOpen(arg0: InetSocketAddress): void;
    connectionInitPacket(arg0: InetSocketAddress, arg1: number): void;
    unconnectedPing(arg0: InetSocketAddress): void;
}