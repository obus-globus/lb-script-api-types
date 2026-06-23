import type { File } from '../../../../java/io/File.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketImplFactory } from '../../../../java/net/SocketImplFactory.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { AFServerSocket } from '../../../../org/newsclub/net/unix/AFServerSocket.d.ts'
import type { AFSocketImpl } from '../../../../org/newsclub/net/unix/AFSocketImpl.d.ts'
import type { AFUNIXServerSocketChannel } from '../../../../org/newsclub/net/unix/AFUNIXServerSocketChannel.d.ts'
import type { AFUNIXSocket } from '../../../../org/newsclub/net/unix/AFUNIXSocket.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
export class AFUNIXServerSocket extends AFServerSocket<AFUNIXSocketAddress> {
    static bindOn(paramarg0: File, paramarg1: boolean): AFUNIXServerSocket;
    static bindOn(paramarg0: Path[][], paramarg1: boolean): AFUNIXServerSocket;
    static bindOn(paramarg0: AFUNIXSocketAddress): AFUNIXServerSocket;
    static bindOn(paramarg0: AFUNIXSocketAddress, paramarg1: boolean): AFUNIXServerSocket;
    static forceBindOn(paramarg0: AFUNIXSocketAddress): AFUNIXServerSocket;
    static isSupported(): boolean;
    static newInstance(): AFUNIXServerSocket;
    static setSocketFactory(paramarg0: SocketImplFactory): void;
    constructor()
    constructor(arg0: FileDescriptor)
    accept(): AFUNIXSocket;
    getChannel(): AFUNIXServerSocketChannel;
    newChannel(): AFUNIXServerSocketChannel;
    newImpl(arg0: FileDescriptor): AFSocketImpl<AFUNIXSocketAddress>;
    newSocketInstance(): AFUNIXSocket;
}