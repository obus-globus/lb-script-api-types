import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DatagramPacket } from '../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeDatagramPacketArray$NativeDatagramPacket extends Object {
    constructor(null_: NativeDatagramPacketArray$NativeDatagramPacket)
    // private count: number;
    // private memoryAddress: number;
    // private recipientAddr: number[];
    // private recipientAddrLen: number;
    // private recipientPort: number;
    // private recipientScopeId: number;
    // private segmentSize: number;
    // private senderAddr: number[];
    // private senderAddrLen: number;
    // private senderPort: number;
    // private senderScopeId: number;
    hasSender(): boolean;
    // private init(arg0: number, arg1: number, arg2: number, arg3: InetSocketAddress): void;
    newDatagramPacket(arg0: ByteBuf, arg1: InetSocketAddress): DatagramPacket;
}