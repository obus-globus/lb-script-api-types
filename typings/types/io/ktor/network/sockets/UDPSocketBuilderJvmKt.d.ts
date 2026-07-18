import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { BoundDatagramSocket } from '../../../../io/ktor/network/sockets/BoundDatagramSocket.d.ts'
import type { ConnectedDatagramSocket } from '../../../../io/ktor/network/sockets/ConnectedDatagramSocket.d.ts'
import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { SocketOptions$UDPSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$UDPSocketOptions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UDPSocketBuilderJvmKt extends Object {
    static udpBind(selector: SelectorManager, localAddress: SocketAddress | null, options: SocketOptions$UDPSocketOptions): BoundDatagramSocket;
    static udpConnect(selector: SelectorManager, remoteAddress: SocketAddress, localAddress: SocketAddress | null, options: SocketOptions$UDPSocketOptions): ConnectedDatagramSocket;
}