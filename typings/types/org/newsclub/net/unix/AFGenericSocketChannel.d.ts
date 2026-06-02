import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { AFGenericSocket } from '../../../../org/newsclub/net/unix/AFGenericSocket.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFGenericSocketExtensions } from '../../../../org/newsclub/net/unix/AFGenericSocketExtensions.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
export class AFGenericSocketChannel extends AFSocketChannel<AFGenericSocketAddress> implements AFGenericSocketExtensions {
    static open(): SocketChannel;
    static open(paramarg0: SocketAddress): SocketChannel;
    static open(paramarg0: ProtocolFamily): SocketChannel;
    constructor(arg0: AFGenericSocket)
}