import type { ProtocolFamily } from '../../../java/net/ProtocolFamily.d.ts'
import type { Socket } from '../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../java/net/SocketOption.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../java/nio/channels/ByteChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { NetworkChannel } from '../../../java/nio/channels/NetworkChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { AbstractSelectableChannel } from '../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { SelectorProvider } from '../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SocketChannel extends AbstractSelectableChannel implements ByteChannel, GatheringByteChannel, NetworkChannel, ScatteringByteChannel {
    static open(): SocketChannel;
    static open(paramarg0: ProtocolFamily): SocketChannel;
    static open(paramarg0: SocketAddress): SocketChannel;
    constructor(arg0: SelectorProvider)
    bind(arg0: SocketAddress): SocketChannel;
    connect(arg0: SocketAddress): boolean;
    finishConnect(): boolean;
    getLocalAddress(): SocketAddress;
    getRemoteAddress(): SocketAddress;
    isConnected(): boolean;
    isConnectionPending(): boolean;
    read(arg0: ByteBuffer): number;
    read(arg0: ByteBuffer[]): number;
    read(arg0: ByteBuffer[], arg1: number, arg2: number): number;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): SocketChannel;
    shutdownInput(): SocketChannel;
    shutdownOutput(): SocketChannel;
    socket(): Socket;
    validOps(): number;
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer[]): number;
    write(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}