import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { DatagramPacket } from '../../../../java/net/DatagramPacket.d.ts'
import type { DatagramSocket } from '../../../../java/net/DatagramSocket.d.ts'
import type { DatagramSocketImplFactory } from '../../../../java/net/DatagramSocketImplFactory.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFDatagramChannel } from '../../../../org/newsclub/net/unix/AFDatagramChannel.d.ts'
import type { AFDatagramSocketImpl } from '../../../../org/newsclub/net/unix/AFDatagramSocketImpl.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketExtensions } from '../../../../org/newsclub/net/unix/AFSocketExtensions.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AFSocketOption } from '../../../../org/newsclub/net/unix/AFSocketOption.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
import type { DatagramSocketShim } from '../../../../org/newsclub/net/unix/DatagramSocketShim.d.ts'
export abstract class AFDatagramSocket<A extends AFSocketAddress> extends DatagramSocketShim implements AFSocketExtensions, AFSomeSocket {
    static setDatagramSocketImplFactory(paramarg0: DatagramSocketImplFactory): void;
    constructor(arg0: AFDatagramSocketImpl<A>)
    // private ancillaryDataSupport: AncillaryDataSupport;
    readonly channel: AFDatagramChannel<A>;
    // private created: AtomicBoolean;
    readonly deleteOnClose: AtomicBoolean;
    // private impl: AFDatagramSocketImpl<A>;
    accept(): AFDatagramSocket<A>;
    accept1(arg0: boolean): AFDatagramSocket<A>;
    addressFamily(): AFAddressFamily<A>;
    bind(arg0: SocketAddress): void;
    close(): void;
    connect(arg0: InetAddress, arg1: number): void;
    connect(arg0: SocketAddress): void;
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    getAFImpl(): AFDatagramSocketImpl<A>;
    getAFImpl(arg0: boolean): AFDatagramSocketImpl<A>;
    getAncillaryDataSupport(): AncillaryDataSupport;
    getAncillaryReceiveBufferSize(): number;
    getChannel(): AFDatagramChannel<A>;
    getFileDescriptor(): FileDescriptor;
    getImplExtensions(): AFSocketImplExtensions<A>;
    getLocalSocketAddress(): A;
    getOption<T extends unknown>(arg0: SocketOption<T>): T;
    getOption<T extends unknown>(arg0: AFSocketOption<T>): T;
    getRemoteSocketAddress(): A;
    internalDummyBind(): void;
    internalDummyConnect(): void;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    isDeleteOnClose(): boolean;
    listen(arg0: number): void;
    newChannel(): AFDatagramChannel<A>;
    newDatagramSocketInstance(): AFDatagramSocket<A>;
    peek(arg0: DatagramPacket): void;
    receive(arg0: DatagramPacket): void;
    send(arg0: DatagramPacket): void;
    setAncillaryReceiveBufferSize(arg0: number): void;
    setDeleteOnClose(arg0: boolean): void;
    setOption<T extends unknown>(arg0: SocketOption<T>, arg1: T): DatagramSocket;
    setOption<T extends unknown>(arg0: AFSocketOption<T>, arg1: T): DatagramSocket;
    setShutdownOnClose(arg0: boolean): void;
    socketAddressClass(): Class<AFSocketAddress>;
}