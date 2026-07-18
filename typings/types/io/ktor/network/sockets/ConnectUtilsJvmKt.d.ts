import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { ServerSocket } from '../../../../io/ktor/network/sockets/ServerSocket.d.ts'
import type { Socket } from '../../../../io/ktor/network/sockets/Socket.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { SocketOptions$AcceptorOptions } from '../../../../io/ktor/network/sockets/SocketOptions$AcceptorOptions.d.ts'
import type { SocketOptions$TCPClientSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$TCPClientSocketOptions.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConnectUtilsJvmKt extends Object {
    static openServerSocketChannelFor(self: SelectorProvider, address: SocketAddress | null): ServerSocketChannel;
    static openSocketChannelFor(self: SelectorProvider, address: SocketAddress): SocketChannel;
    static tcpBind(selector: SelectorManager, localAddress: SocketAddress | null, socketOptions: SocketOptions$AcceptorOptions): ServerSocket;
    static tcpConnect(selector: SelectorManager, remoteAddress: SocketAddress, socketOptions: SocketOptions$TCPClientSocketOptions): Socket;
}