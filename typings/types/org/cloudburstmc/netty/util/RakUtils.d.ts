import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { DatagramPacket } from '../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { IntRange } from '../../../../org/cloudburstmc/netty/util/IntRange.d.ts'
export class RakUtils extends Object {
    static clamp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static datagramReply(paramarg0: ByteBuf, paramarg1: DatagramPacket): DatagramPacket;
    static destroyChannelPipeline(paramarg0: Map$Entry<string, ChannelHandler>[]): void;
    static newChannelPipeline(paramarg0: Channel): (Object | null)[];
    static powerOfTwoCeiling(paramarg0: number): number;
    static readAddress(paramarg0: ByteBuf): InetSocketAddress;
    static skipAddress(paramarg0: ByteBuf): boolean;
    static writeAckEntries(paramarg0: ByteBuf, paramarg1: IntRange[], paramarg2: number): number;
    static writeAddress(paramarg0: ByteBuf, paramarg1: InetSocketAddress): void;
    constructor()
}