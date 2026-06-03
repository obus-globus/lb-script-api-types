import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { DatagramPacket } from '../../../../java/net/DatagramPacket.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketCore } from '../../../../org/newsclub/net/unix/AFSocketCore.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
import type { DatagramSocketImplShim } from '../../../../org/newsclub/net/unix/DatagramSocketImplShim.d.ts'
export abstract class AFDatagramSocketImpl<A extends AFSocketAddress> extends DatagramSocketImplShim {
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
    constructor(arg0: AFAddressFamily<A>, arg1: FileDescriptor, arg2: AFSocketType)
    // private addressFamily: AFAddressFamily<A>;
    // private ancillaryDataSupport: AncillaryDataSupport;
    // private bound: AtomicBoolean;
    // private connected: AtomicBoolean;
    // private core: AFSocketCore;
    // private implExtensions: AFSocketImplExtensions<A>;
    // private localPort: number;
    // private remotePort: number;
    // private socketTimeout: AtomicInteger;
    // private socketType: AFSocketType;
    accept0(arg0: AFDatagramSocketImpl<A>): boolean;
    bind(arg0: number, arg1: InetAddress): void;
    bind(arg0: AFSocketAddress): void;
    close(): void;
    connect(arg0: InetAddress, arg1: number): void;
    connect(arg0: AFSocketAddress): void;
    create(): void;
    disconnect(): void;
    getAddressFamily(): AFAddressFamily<A>;
    getCore(): AFSocketCore;
    getFileDescriptor(): FileDescriptor;
    getImplExtensions(): AFSocketImplExtensions<A>;
    getLocalPort1(): number;
    getLocalSocketAddress(): A;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    getOption(arg0: number): Object;
    getRemotePort(): number;
    getRemoteSocketAddress(): A;
    getTTL(): number;
    getTimeToLive(): number;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    join(arg0: InetAddress): void;
    joinGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    leave(arg0: InetAddress): void;
    leaveGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    peek(arg0: InetAddress): number;
    peekData(arg0: DatagramPacket): number;
    read(arg0: ByteBuffer, arg1: ByteBuffer): number;
    receive(arg0: DatagramPacket): void;
    receive(arg0: ByteBuffer): A;
    // private recv(arg0: DatagramPacket, arg1: number): void;
    send(arg0: DatagramPacket): void;
    send(arg0: ByteBuffer, arg1: SocketAddress): number;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): void;
    setOption(arg0: number, arg1: Object): void;
    setSocketAddress(arg0: AFSocketAddress): void;
    setTTL(arg0: number): void;
    setTimeToLive(arg0: number): void;
    updatePorts(arg0: number, arg1: number): void;
    write(arg0: ByteBuffer): number;
}