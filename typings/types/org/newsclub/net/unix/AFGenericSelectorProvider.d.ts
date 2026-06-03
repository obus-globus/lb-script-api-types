import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFGenericDatagramChannel } from '../../../../org/newsclub/net/unix/AFGenericDatagramChannel.d.ts'
import type { AFGenericServerSocketChannel } from '../../../../org/newsclub/net/unix/AFGenericServerSocketChannel.d.ts'
import type { AFGenericSocket } from '../../../../org/newsclub/net/unix/AFGenericSocket.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFGenericSocketChannel } from '../../../../org/newsclub/net/unix/AFGenericSocketChannel.d.ts'
import type { AFGenericSocketPair } from '../../../../org/newsclub/net/unix/AFGenericSocketPair.d.ts'
import type { AFSelectorProvider } from '../../../../org/newsclub/net/unix/AFSelectorProvider.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
import type { AFSocketPair } from '../../../../org/newsclub/net/unix/AFSocketPair.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
export class AFGenericSelectorProvider extends AFSelectorProvider<AFGenericSocketAddress> {
    static getInstance(): AFGenericSelectorProvider;
    static provider(): SelectorProvider;
    static provider(): AFGenericSelectorProvider;
    private constructor()
    addressFamily(): AFAddressFamily<AFGenericSocketAddress>;
    newSocket(): AFGenericSocket;
    newSocketPair<P extends AFSomeSocket>(arg0: P, arg1: P): AFSocketPair<P>;
    openDatagramChannel(): AFGenericDatagramChannel;
    openDatagramChannel(arg0: ProtocolFamily): AFGenericDatagramChannel;
    openDatagramChannel(arg0: AFSocketType): AFGenericDatagramChannel;
    openDatagramChannelPair(): AFGenericSocketPair<AFGenericDatagramChannel>;
    openDatagramChannelPair(arg0: AFSocketType): AFGenericSocketPair<AFGenericDatagramChannel>;
    openServerSocketChannel(): AFGenericServerSocketChannel;
    openServerSocketChannel(arg0: ProtocolFamily): AFServerSocketChannel<AFGenericSocketAddress>;
    openServerSocketChannel(arg0: SocketAddress): AFGenericServerSocketChannel;
    openSocketChannel(): AFGenericSocketChannel;
    openSocketChannel(arg0: ProtocolFamily): AFSocketChannel<AFGenericSocketAddress>;
    openSocketChannel(arg0: SocketAddress): AFGenericSocketChannel;
    openSocketChannelPair(): AFGenericSocketPair<AFGenericSocketChannel>;
    protocolFamily(): ProtocolFamily;
}