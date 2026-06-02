import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketImpl } from '../../../../java/net/SocketImpl.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFInputStream } from '../../../../org/newsclub/net/unix/AFInputStream.d.ts'
import type { AFOutputStream } from '../../../../org/newsclub/net/unix/AFOutputStream.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketCore } from '../../../../org/newsclub/net/unix/AFSocketCore.d.ts'
import type { AFSocketImpl$AFSocketStreamCore } from '../../../../org/newsclub/net/unix/AFSocketImpl$AFSocketStreamCore.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
import type { SocketImplShim } from '../../../../org/newsclub/net/unix/SocketImplShim.d.ts'
export abstract class AFSocketImpl<A extends AFSocketAddress> extends SocketImplShim {
    static IP_MULTICAST_IF: number;
    static IP_MULTICAST_IF2: number;
    static IP_MULTICAST_LOOP: number;
    static IP_TOS: number;
    static SO_BINDADDR: number;
    static SO_BROADCAST: number;
    static SO_KEEPALIVE: number;
    static SO_LINGER: number;
    static SO_OOBINLINE: number;
    static SO_RCVBUF: number;
    static SO_REUSEADDR: number;
    static SO_REUSEPORT: number;
    static SO_SNDBUF: number;
    static SO_TIMEOUT: number;
    static TCP_NODELAY: number;
    constructor(arg0: AFAddressFamily<A>, arg1: FileDescriptor)
    // private addressFamily: AFAddressFamily<A>;
    // private ancillaryDataSupport: AncillaryDataSupport;
    // private bound: AtomicBoolean;
    // private closed: AtomicBoolean;
    // private closedInputStream: boolean;
    // private closedOutputStream: boolean;
    // private connected: AtomicBoolean;
    // private core: AFSocketImpl$AFSocketStreamCore;
    // private createType: boolean;
    // private implExtensions: AFSocketImplExtensions<A>;
    // private in: AFInputStream;
    // private out: AFOutputStream;
    // private reuseAddr: boolean;
    // private shutdownState: number;
    // private socketTimeout: AtomicInteger;
    accept(arg0: SocketImpl): void;
    accept0(arg0: SocketImpl): boolean;
    available(): number;
    bind(arg0: InetAddress, arg1: number): void;
    bind(arg0: SocketAddress, arg1: number): void;
    // private checkClose(): void;
    close(): void;
    connect(arg0: InetAddress, arg1: number): void;
    connect(arg0: SocketAddress, arg1: number): void;
    connect(arg0: string, arg1: number): void;
    connect0(arg0: SocketAddress, arg1: number): boolean;
    create(arg0: boolean): void;
    createSocket(arg0: FileDescriptor, arg1: AFSocketType): void;
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    getAddressFamily(): AFAddressFamily<A>;
    getAncillaryDataSupport(): AncillaryDataSupport;
    getAncillaryReceiveBufferSize(): number;
    getCore(): AFSocketCore;
    getFD(): FileDescriptor;
    getFileDescriptor(): FileDescriptor;
    getImplExtensions(): AFSocketImplExtensions<A>;
    getInetAddress(): InetAddress;
    getInputStream(): AFInputStream;
    getLocalPort1(): number;
    getLocalSocketAddress(): A;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    getOption(arg0: number): Object;
    // private getOption0(arg0: number): Object;
    getOptionLenient(arg0: number): Object;
    getOutputStream(): AFOutputStream;
    getRemotePort(): number;
    getRemoteSocketAddress(): A;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    listen(arg0: number): void;
    newInputStream(): AFInputStream;
    newOutputStream(): AFOutputStream;
    read(arg0: ByteBuffer, arg1: ByteBuffer): number;
    receive(arg0: ByteBuffer): SocketAddress;
    send(arg0: ByteBuffer, arg1: SocketAddress): number;
    sendUrgentData(arg0: number): void;
    setAncillaryReceiveBufferSize(arg0: number): void;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): void;
    setOption(arg0: number, arg1: Object): void;
    // private setOption0(arg0: number, arg1: Object): void;
    setOptionLenient(arg0: number, arg1: Object): void;
    setSocketAddress(arg0: AFSocketAddress): void;
    shutdown(): void;
    shutdownInput(): void;
    shutdownOutput(): void;
    supportedOptions(): SocketOption<Object>[];
    supportsUrgentData(): boolean;
    toString(): string;
    updatePorts(arg0: number, arg1: number): void;
    write(arg0: ByteBuffer): number;
}