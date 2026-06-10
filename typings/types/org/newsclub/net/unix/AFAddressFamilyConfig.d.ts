import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFDatagramChannel } from '../../../../org/newsclub/net/unix/AFDatagramChannel.d.ts'
import type { AFDatagramSocket } from '../../../../org/newsclub/net/unix/AFDatagramSocket.d.ts'
import type { AFDatagramSocket$Constructor } from '../../../../org/newsclub/net/unix/AFDatagramSocket$Constructor.d.ts'
import type { AFServerSocket } from '../../../../org/newsclub/net/unix/AFServerSocket.d.ts'
import type { AFServerSocket$Constructor } from '../../../../org/newsclub/net/unix/AFServerSocket$Constructor.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocket$Constructor } from '../../../../org/newsclub/net/unix/AFSocket$Constructor.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
import type { AFSocketFactory } from '../../../../org/newsclub/net/unix/AFSocketFactory.d.ts'
export abstract class AFAddressFamilyConfig<A extends AFSocketAddress> extends Object {
    constructor()
    datagramChannelClass(): Class<AFDatagramChannel<A>>;
    datagramSocketClass(): Class<AFDatagramSocket<A>>;
    datagramSocketConstructor(): (param0: FileDescriptor) => AFDatagramSocket<A>;
    serverSocketChannelClass(): Class<AFServerSocketChannel<A>>;
    serverSocketClass(): Class<AFServerSocket<A>>;
    serverSocketConstructor(): AFServerSocket$Constructor<A>;
    socketChannelClass(): Class<AFSocketChannel<A>>;
    socketClass(): Class<AFSocket<A>>;
    socketConstructor(): (param0: FileDescriptor, param1: AFSocketFactory<A>) => AFSocket<A>;
}