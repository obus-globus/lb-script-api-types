import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { SocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions.d.ts'
import type { SocketOptions$Companion } from '../../../../io/ktor/network/sockets/SocketOptions$Companion.d.ts'
import type { SocketOptions$PeerSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$PeerSocketOptions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SocketOptions$TCPClientSocketOptions extends SocketOptions$PeerSocketOptions {
    static Companion: SocketOptions$Companion;
    constructor(customOptions: JavaMap<Object, Object | null>)
    keepAlive: boolean | null;
    lingerSeconds: number;
    noDelay: boolean;
    socketTimeout: number;
    copy(): SocketOptions$TCPClientSocketOptions;
    protected copyCommon(from: SocketOptions): void;
}