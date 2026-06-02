import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { AbstractSelector } from '../../../../java/nio/channels/spi/AbstractSelector.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFDatagramChannel } from '../../../../org/newsclub/net/unix/AFDatagramChannel.d.ts'
import type { AFPipe } from '../../../../org/newsclub/net/unix/AFPipe.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
import type { AFSocketPair } from '../../../../org/newsclub/net/unix/AFSocketPair.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { SelectorProviderShim } from '../../../../org/newsclub/net/unix/SelectorProviderShim.d.ts'
export abstract class AFSelectorProvider<A extends AFSocketAddress> extends SelectorProviderShim {
    static provider(): SelectorProvider;
    constructor()
    addressFamily(): AFAddressFamily<A>;
    domainId(): number;
    // private newPipe(arg0: boolean): AFPipe;
    newSocket(): AFSocket<A>;
    newSocketPair<Y extends AFSomeSocket>(arg0: Y, arg1: Y): AFSocketPair<Y>;
    openDatagramChannel(): AFDatagramChannel<A>;
    openDatagramChannel(arg0: ProtocolFamily): AFDatagramChannel<A>;
    openDatagramChannel(arg0: AFSocketType): AFDatagramChannel<A>;
    openDatagramChannelPair(): AFSocketPair<AFDatagramChannel<A>>;
    openDatagramChannelPair(arg0: AFSocketType): AFSocketPair<AFDatagramChannel<A>>;
    openPipe(): AFPipe;
    openSelectablePipe(): AFPipe;
    openSelector(): AbstractSelector;
    openServerSocketChannel(): AFServerSocketChannel<A>;
    openServerSocketChannel(arg0: ProtocolFamily): AFServerSocketChannel<A>;
    openServerSocketChannel(arg0: SocketAddress): AFServerSocketChannel<A>;
    openSocketChannel(): AFSocketChannel<A>;
    openSocketChannel(arg0: ProtocolFamily): AFSocketChannel<A>;
    openSocketChannel(arg0: SocketAddress): AFSocketChannel<A>;
    openSocketChannelPair(): AFSocketPair<AFSocketChannel<A>>;
    protocolFamily(): ProtocolFamily;
}