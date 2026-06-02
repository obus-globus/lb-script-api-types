import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFSelectorProvider } from '../../../../org/newsclub/net/unix/AFSelectorProvider.d.ts'
import type { AFSocketPair } from '../../../../org/newsclub/net/unix/AFSocketPair.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { AFUNIXDatagramChannel } from '../../../../org/newsclub/net/unix/AFUNIXDatagramChannel.d.ts'
import type { AFUNIXServerSocketChannel } from '../../../../org/newsclub/net/unix/AFUNIXServerSocketChannel.d.ts'
import type { AFUNIXSocket } from '../../../../org/newsclub/net/unix/AFUNIXSocket.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketChannel } from '../../../../org/newsclub/net/unix/AFUNIXSocketChannel.d.ts'
import type { AFUNIXSocketPair } from '../../../../org/newsclub/net/unix/AFUNIXSocketPair.d.ts'
export class AFUNIXSelectorProvider extends AFSelectorProvider<AFUNIXSocketAddress> {
    static getInstance(): AFUNIXSelectorProvider;
    static provider(): SelectorProvider;
    static provider(): AFUNIXSelectorProvider;
    private constructor()
    addressFamily(): AFAddressFamily<AFUNIXSocketAddress>;
    newSocket(): AFUNIXSocket;
    newSocketPair<P extends AFSomeSocket>(arg0: P, arg1: P): AFSocketPair<P>;
    openDatagramChannel(): AFUNIXDatagramChannel;
    openDatagramChannel(arg0: ProtocolFamily): AFUNIXDatagramChannel;
    openDatagramChannel(arg0: AFSocketType): AFUNIXDatagramChannel;
    openDatagramChannelPair(): AFUNIXSocketPair<AFUNIXDatagramChannel>;
    openDatagramChannelPair(arg0: AFSocketType): AFUNIXSocketPair<AFUNIXDatagramChannel>;
    openServerSocketChannel(): AFUNIXServerSocketChannel;
    openServerSocketChannel(arg0: SocketAddress): AFUNIXServerSocketChannel;
    openSocketChannel(): AFUNIXSocketChannel;
    openSocketChannel(arg0: SocketAddress): AFUNIXSocketChannel;
    openSocketChannelPair(): AFUNIXSocketPair<AFUNIXSocketChannel>;
    protocolFamily(): ProtocolFamily;
}