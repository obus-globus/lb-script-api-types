import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelOutboundBuffer } from '../../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { NativeDatagramPacketArray$MyMessageProcessor } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray$MyMessageProcessor.d.ts'
import type { NativeDatagramPacketArray$NativeDatagramPacket } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray$NativeDatagramPacket.d.ts'
import type { IovArray } from '../../../../io/netty/channel/unix/IovArray.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeDatagramPacketArray extends Object {
    constructor()
    // private count: number;
    // private iovArray: IovArray;
    // private ipv4Bytes: number[];
    // private packets: NativeDatagramPacketArray$NativeDatagramPacket[];
    // private processor: NativeDatagramPacketArray$MyMessageProcessor;
    add(arg0: ChannelOutboundBuffer, arg1: boolean, arg2: number): void;
    // private add0(arg0: ByteBuf, arg1: number, arg2: number, arg3: number, arg4: InetSocketAddress): boolean;
    addWritable(arg0: ByteBuf, arg1: number, arg2: number): boolean;
    clear(): void;
    count(): number;
    packets(): NativeDatagramPacketArray$NativeDatagramPacket[];
    release(): void;
}