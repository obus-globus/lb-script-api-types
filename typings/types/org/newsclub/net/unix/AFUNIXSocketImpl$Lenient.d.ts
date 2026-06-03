import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFUNIXSocketImpl } from '../../../../org/newsclub/net/unix/AFUNIXSocketImpl.d.ts'
export class AFUNIXSocketImpl$Lenient extends AFUNIXSocketImpl {
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
    constructor(arg0: FileDescriptor)
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    getOption(arg0: number): Object;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): void;
    setOption(arg0: number, arg1: Object): void;
}