import type { ProtocolFamily } from '../../../java/net/ProtocolFamily.d.ts'
import type { ServerSocket } from '../../../java/net/ServerSocket.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../java/net/SocketOption.d.ts'
import type { NetworkChannel } from '../../../java/nio/channels/NetworkChannel.d.ts'
import type { SocketChannel } from '../../../java/nio/channels/SocketChannel.d.ts'
import type { AbstractSelectableChannel } from '../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { SelectorProvider } from '../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ServerSocketChannel extends AbstractSelectableChannel implements NetworkChannel {
    static open(): ServerSocketChannel;
    static open(paramarg0: ProtocolFamily): ServerSocketChannel;
    constructor(arg0: SelectorProvider)
    accept(): SocketChannel;
    bind(arg0: SocketAddress): ServerSocketChannel;
    bind(arg0: SocketAddress, arg1: number): ServerSocketChannel;
    getLocalAddress(): SocketAddress;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): ServerSocketChannel;
    socket(): ServerSocket;
    validOps(): number;
}