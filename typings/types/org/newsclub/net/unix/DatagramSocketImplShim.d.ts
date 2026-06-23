import type { DatagramSocketImpl } from '../../../../java/net/DatagramSocketImpl.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class DatagramSocketImplShim extends DatagramSocketImpl {
    static IP_MULTICAST_IF: number;
    static IP_MULTICAST_IF2: number;
    static IP_MULTICAST_LOOP: number;
    static IP_TOS: number;
    static SO_BINDADDR: number;
    static SO_BROADCAST: number;
    static SO_KEEPALIVE: number;
    static SO_LINGER: number;
    static SO_OOBINLINE: number;
    static SO_RCVBUF: number;
    static SO_REUSEADDR: number;
    static SO_REUSEPORT: number;
    static SO_SNDBUF: number;
    static SO_TIMEOUT: number;
    static TCP_NODELAY: number;
    constructor()
    getOption<T extends unknown>(arg0: SocketOption<T>): T;
    setOption<T extends unknown>(arg0: SocketOption<T>, arg1: T): void;
    supportedOptions(): SocketOption<Object>[];
}