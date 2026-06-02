import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFUNIXServerSocket } from '../../../../org/newsclub/net/unix/AFUNIXServerSocket.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketChannel } from '../../../../org/newsclub/net/unix/AFUNIXSocketChannel.d.ts'
export class AFUNIXServerSocketChannel extends AFServerSocketChannel<AFUNIXSocketAddress> {
    static open(): ServerSocketChannel;
    static open(paramarg0: ProtocolFamily): ServerSocketChannel;
    static open(): AFUNIXServerSocketChannel;
    constructor(arg0: AFUNIXServerSocket)
    accept(): AFUNIXSocketChannel;
}