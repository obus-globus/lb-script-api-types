import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { ServerSocket } from '../../../../java/net/ServerSocket.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketImplFactory } from '../../../../java/net/SocketImplFactory.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketImpl } from '../../../../org/newsclub/net/unix/AFSocketImpl.d.ts'
import type { AFSomeSocketThing } from '../../../../org/newsclub/net/unix/AFSomeSocketThing.d.ts'
import type { Closeables } from '../../../../org/newsclub/net/unix/Closeables.d.ts'
import type { SocketAddressFilter } from '../../../../org/newsclub/net/unix/SocketAddressFilter.d.ts'
export abstract class AFServerSocket<A extends AFSocketAddress> extends ServerSocket implements AFSomeSocketThing {
    static isSupported(): boolean;
    static setSocketFactory(paramarg0: SocketImplFactory): void;
    constructor()
    constructor(arg0: FileDescriptor)
    // private bindFilter: (param0: SocketAddress) => java.net.SocketAddress;
    // private boundEndpoint: A;
    readonly channel: AFServerSocketChannel<A>;
    // private closeables: Closeables;
    readonly closed: AtomicBoolean;
    // private created: AtomicBoolean;
    readonly deleteOnClose: AtomicBoolean;
    // private implementation: AFSocketImpl<A>;
    accept(): AFSocket<A>;
    accept1(arg0: boolean): AFSocket<A>;
    addCloseable(arg0: Closeable): void;
    addressFamily(): AFAddressFamily<A>;
    bind(arg0: SocketAddress): void;
    bind(arg0: SocketAddress, arg1: number): void;
    bindHook(arg0: (param0: SocketAddress) => java.net.SocketAddress): AFServerSocket<A>;
    // private boundEndpoint0(): A;
    close(): void;
    forceBindAddress(arg0: SocketAddress): AFServerSocket<A>;
    getAFImpl(): AFSocketImpl<A>;
    getChannel(): AFServerSocketChannel<A>;
    getFileDescriptor(): FileDescriptor;
    getInetAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): A;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    getReceiveBufferSize(): number;
    getReuseAddress(): boolean;
    getSoTimeout(): number;
    isBound(): boolean;
    isClosed(): boolean;
    isDeleteOnClose(): boolean;
    isLocalSocketAddressValid(): boolean;
    newChannel(): AFServerSocketChannel<A>;
    newImpl(arg0: FileDescriptor): AFSocketImpl<A>;
    newSocketInstance(): AFSocket<A>;
    removeCloseable(arg0: Closeable): void;
    setBoundEndpoint(arg0: A): void;
    setDeleteOnClose(arg0: boolean): void;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): ServerSocket;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
    setReceiveBufferSize(arg0: number): void;
    setReuseAddress(arg0: boolean): void;
    setShutdownOnClose(arg0: boolean): void;
    setSoTimeout(arg0: number): void;
    supportedOptions(): SocketOption<Object>[];
    toString(): string;
}