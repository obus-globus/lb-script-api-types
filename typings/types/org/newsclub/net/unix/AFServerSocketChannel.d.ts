import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSelectorProvider } from '../../../../org/newsclub/net/unix/AFSelectorProvider.d.ts'
import type { AFServerSocket } from '../../../../org/newsclub/net/unix/AFServerSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
import type { AFSocketCore } from '../../../../org/newsclub/net/unix/AFSocketCore.d.ts'
import type { AFSomeSocketChannel } from '../../../../org/newsclub/net/unix/AFSomeSocketChannel.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export abstract class AFServerSocketChannel<A extends AFSocketAddress> extends ServerSocketChannel implements AFSomeSocketChannel, FileDescriptorAccess {
    static open(): ServerSocketChannel;
    static open(paramarg0: ProtocolFamily): ServerSocketChannel;
    constructor(arg0: AFServerSocket<A>, arg1: AFSelectorProvider<A>)
    // private afSocket: AFServerSocket<A>;
    accept(): AFSocketChannel<A>;
    bind(arg0: SocketAddress, arg1: number): AFServerSocketChannel<A>;
    getAFCore(): AFSocketCore;
    getFileDescriptor(): FileDescriptor;
    getLocalAddress(): A;
    getLocalSocketAddress(): A;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    implCloseSelectableChannel(): void;
    implConfigureBlocking(arg0: boolean): void;
    isDeleteOnClose(): boolean;
    isLocalSocketAddressValid(): boolean;
    setDeleteOnClose(arg0: boolean): void;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): AFServerSocketChannel<A>;
    setShutdownOnClose(arg0: boolean): void;
    socket(): AFServerSocket<A>;
    supportedOptions(): SocketOption<Object>[];
}