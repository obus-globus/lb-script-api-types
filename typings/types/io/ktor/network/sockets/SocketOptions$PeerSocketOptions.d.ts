import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { SocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions.d.ts'
import type { SocketOptions$Companion } from '../../../../io/ktor/network/sockets/SocketOptions$Companion.d.ts'
import type { SocketOptions$TCPClientSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$TCPClientSocketOptions.d.ts'
import type { SocketOptions$UDPSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$UDPSocketOptions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SocketOptions$PeerSocketOptions extends SocketOptions {
    static Companion: SocketOptions$Companion;
    constructor(customOptions: JavaMap<Object, Object | null>)
    receiveBufferSize: number;
    sendBufferSize: number;
    copy(): SocketOptions$PeerSocketOptions;
    protected copyCommon(from: SocketOptions): void;
    tcpConnect(): SocketOptions$TCPClientSocketOptions;
    udp(): SocketOptions$UDPSocketOptions;
}