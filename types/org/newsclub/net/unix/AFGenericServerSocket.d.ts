import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketImplFactory } from '../../../../java/net/SocketImplFactory.d.ts'
import type { AFGenericServerSocketChannel } from '../../../../org/newsclub/net/unix/AFGenericServerSocketChannel.d.ts'
import type { AFGenericSocket } from '../../../../org/newsclub/net/unix/AFGenericSocket.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFServerSocket } from '../../../../org/newsclub/net/unix/AFServerSocket.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketImpl } from '../../../../org/newsclub/net/unix/AFSocketImpl.d.ts'
export class AFGenericServerSocket extends AFServerSocket<AFGenericSocketAddress> {
    static bindOn(paramarg0: AFGenericSocketAddress): AFGenericServerSocket;
    static bindOn(paramarg0: AFGenericSocketAddress, paramarg1: boolean): AFGenericServerSocket;
    static forceBindOn(paramarg0: AFGenericSocketAddress): AFGenericServerSocket;
    static isSupported(): boolean;
    static newInstance(): AFGenericServerSocket;
    static setSocketFactory(paramarg0: SocketImplFactory): void;
    constructor(arg0: FileDescriptor)
    accept(): AFGenericSocket;
    getChannel(): AFGenericServerSocketChannel;
    newChannel(): AFServerSocketChannel<AFGenericSocketAddress>;
    newImpl(arg0: FileDescriptor): AFSocketImpl<AFGenericSocketAddress>;
    newSocketInstance(): AFSocket<AFGenericSocketAddress>;
}