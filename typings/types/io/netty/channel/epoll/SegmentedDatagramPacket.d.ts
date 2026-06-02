import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SegmentedDatagramPacket } from '../../../../io/netty/channel/unix/SegmentedDatagramPacket.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SegmentedDatagramPacket extends SegmentedDatagramPacket {
    static isSupported(): boolean;
    constructor(arg0: ByteBuf, arg1: number, arg2: InetSocketAddress)
    constructor(arg0: ByteBuf, arg1: number, arg2: InetSocketAddress, arg3: InetSocketAddress)
    copy(): SegmentedDatagramPacket;
    duplicate(): SegmentedDatagramPacket;
    replace(arg0: ByteBuf): SegmentedDatagramPacket;
    retain(): SegmentedDatagramPacket;
    retain(arg0: number): SegmentedDatagramPacket;
    retainedDuplicate(): SegmentedDatagramPacket;
    touch(): SegmentedDatagramPacket;
    touch(arg0: Object): SegmentedDatagramPacket;
}