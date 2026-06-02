import type { DatagramSocket } from '../../../java/net/DatagramSocket.d.ts'
import type { ProtocolFamily } from '../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../java/net/SocketOption.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../java/nio/channels/ByteChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { MulticastChannel } from '../../../java/nio/channels/MulticastChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { AbstractSelectableChannel } from '../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { SelectorProvider } from '../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DatagramChannel extends AbstractSelectableChannel implements ByteChannel, GatheringByteChannel, MulticastChannel, ScatteringByteChannel {
    static open(): DatagramChannel;
    static open(paramarg0: ProtocolFamily): DatagramChannel;
    constructor(arg0: SelectorProvider)
    bind(arg0: SocketAddress): DatagramChannel;
    connect(arg0: SocketAddress): DatagramChannel;
    disconnect(): DatagramChannel;
    getLocalAddress(): SocketAddress;
    getRemoteAddress(): SocketAddress;
    isConnected(): boolean;
    read(arg0: ByteBuffer): number;
    read(arg0: ByteBuffer[]): number;
    read(arg0: ByteBuffer[], arg1: number, arg2: number): number;
    receive(arg0: ByteBuffer): SocketAddress;
    send(arg0: ByteBuffer, arg1: SocketAddress): number;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): DatagramChannel;
    socket(): DatagramSocket;
    validOps(): number;
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer[]): number;
    write(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}