import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DatagramPacket } from '../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SegmentedDatagramPacket extends DatagramPacket {
    constructor(arg0: ByteBuf, arg1: number, arg2: InetSocketAddress)
    constructor(arg0: ByteBuf, arg1: number, arg2: InetSocketAddress, arg3: InetSocketAddress)
    // private segmentSize: number;
    copy(): SegmentedDatagramPacket;
    duplicate(): SegmentedDatagramPacket;
    replace(arg0: ByteBuf): SegmentedDatagramPacket;
    retain(): SegmentedDatagramPacket;
    retain(arg0: number): SegmentedDatagramPacket;
    retainedDuplicate(): SegmentedDatagramPacket;
    segmentSize(): number;
    touch(): SegmentedDatagramPacket;
    touch(arg0: Object): SegmentedDatagramPacket;
}