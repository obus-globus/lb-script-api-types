import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketImplFactory } from '../../../../java/net/SocketImplFactory.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFInputStream } from '../../../../org/newsclub/net/unix/AFInputStream.d.ts'
import type { AFOutputStream } from '../../../../org/newsclub/net/unix/AFOutputStream.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketAddressFromHostname } from '../../../../org/newsclub/net/unix/AFSocketAddressFromHostname.d.ts'
import type { AFSocketCapability } from '../../../../org/newsclub/net/unix/AFSocketCapability.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
import type { AFSocketExtensions } from '../../../../org/newsclub/net/unix/AFSocketExtensions.d.ts'
import type { AFSocketImpl } from '../../../../org/newsclub/net/unix/AFSocketImpl.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { AFUNIXSocketCapability } from '../../../../org/newsclub/net/unix/AFUNIXSocketCapability.d.ts'
import type { Closeables } from '../../../../org/newsclub/net/unix/Closeables.d.ts'
import type { SocketAddressFilter } from '../../../../org/newsclub/net/unix/SocketAddressFilter.d.ts'
export abstract class AFSocket<A extends AFSocketAddress> extends Socket implements AFSocketExtensions, AFSomeSocket {
    static connectTo(paramarg0: Object | null): AFSocket<Object>;
    static ensureSupported(): void;
    static ensureUnsafeSupported(): void;
    static getLoadedLibrary(): string;
    static getVersion(): string;
    static isRunningOnAndroid(): boolean;
    static isSupported(): boolean;
    static setSocketImplFactory(paramarg0: SocketImplFactory): void;
    static supports(paramarg0: AFSocketCapability): boolean;
    static supports(paramarg0: AFUNIXSocketCapability): boolean;
    constructor(arg0: AFSocketImpl<A>, arg1: AFSocketAddressFromHostname<A>)
    // private afh: AFSocketAddressFromHostname<A>;
    readonly channel: AFSocketChannel<A>;
    // private closeables: Closeables;
    // private connectFilter: (param0: SocketAddress) => java.net.SocketAddress;
    // private created: AtomicBoolean;
    // private impl: AFSocketImpl<A>;
    addCloseable(arg0: Closeable): void;
    bind(arg0: SocketAddress): void;
    checkConnectionClosed(): boolean;
    close(): void;
    connect(arg0: SocketAddress): void;
    connect(arg0: SocketAddress, arg1: number): void;
    connect0(arg0: SocketAddress, arg1: number): boolean;
    connectHook(arg0: (param0: SocketAddress) => java.net.SocketAddress): AFSocket<A>;
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    forceConnectAddress(arg0: SocketAddress): AFSocket<A>;
    getAFImpl(): AFSocketImpl<A>;
    getAFImpl(arg0: boolean): AFSocketImpl<A>;
    getAncillaryReceiveBufferSize(): number;
    getChannel(): AFSocketChannel<A>;
    getFileDescriptor(): FileDescriptor;
    getImplExtensions(): AFSocketImplExtensions<A>;
    getInputStream(): AFInputStream;
    getLocalSocketAddress(): A;
    getOutputStream(): AFOutputStream;
    getRemoteSocketAddress(): A;
    internalDummyBind(): void;
    internalDummyConnect(): void;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    newChannel(): AFSocketChannel<A>;
    // private preprocessSocketAddress(arg0: SocketAddress): AFSocketAddress;
    removeCloseable(arg0: Closeable): void;
    setAncillaryReceiveBufferSize(arg0: number): void;
    setShutdownOnClose(arg0: boolean): void;
    socketAddressClass(): Class<AFSocketAddress>;
    toString(): string;
    toStringSuffix(): string;
}