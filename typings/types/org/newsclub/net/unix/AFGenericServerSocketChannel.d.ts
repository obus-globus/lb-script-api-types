import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { AFGenericServerSocket } from '../../../../org/newsclub/net/unix/AFGenericServerSocket.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFGenericSocketChannel } from '../../../../org/newsclub/net/unix/AFGenericSocketChannel.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
export class AFGenericServerSocketChannel extends AFServerSocketChannel<AFGenericSocketAddress> {
    static open(): ServerSocketChannel;
    static open(paramarg0: ProtocolFamily): ServerSocketChannel;
    static open(): AFGenericServerSocketChannel;
    constructor(arg0: AFGenericServerSocket)
    accept(): AFGenericSocketChannel;
}