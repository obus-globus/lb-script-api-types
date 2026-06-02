import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { AFDatagramSocketImpl } from '../../../../org/newsclub/net/unix/AFDatagramSocketImpl.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
export class AFGenericDatagramSocketImpl extends AFDatagramSocketImpl<AFGenericSocketAddress> {
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
    constructor(arg0: FileDescriptor, arg1: AFSocketType)
}