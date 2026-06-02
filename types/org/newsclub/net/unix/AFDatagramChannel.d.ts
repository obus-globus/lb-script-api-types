import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { MembershipKey } from '../../../../java/nio/channels/MembershipKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFDatagramSocket } from '../../../../org/newsclub/net/unix/AFDatagramSocket.d.ts'
import type { AFSelectorProvider } from '../../../../org/newsclub/net/unix/AFSelectorProvider.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketCore } from '../../../../org/newsclub/net/unix/AFSocketCore.d.ts'
import type { AFSocketExtensions } from '../../../../org/newsclub/net/unix/AFSocketExtensions.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { AFSomeSocketChannel } from '../../../../org/newsclub/net/unix/AFSomeSocketChannel.d.ts'
export abstract class AFDatagramChannel<A extends AFSocketAddress> extends DatagramChannel implements AFSocketExtensions, AFSomeSocket, AFSomeSocketChannel {
    static open(): DatagramChannel;
    static open(paramarg0: ProtocolFamily): DatagramChannel;
    constructor(arg0: AFSelectorProvider<A>, arg1: AFDatagramSocket<A>)
    // private afSocket: AFDatagramSocket<A>;
    bind(arg0: SocketAddress): AFDatagramChannel<A>;
    connect(arg0: SocketAddress): AFDatagramChannel<A>;
    disconnect(): AFDatagramChannel<A>;
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    getAFCore(): AFSocketCore;
    getAFSocket(): AFDatagramSocket<A>;
    getAncillaryReceiveBufferSize(): number;
    getFileDescriptor(): FileDescriptor;
    getLocalAddress(): A;
    getLocalSocketAddress(): A;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    getRemoteAddress(): A;
    getRemoteSocketAddress(): A;
    implCloseSelectableChannel(): void;
    implConfigureBlocking(arg0: boolean): void;
    isBound(): boolean;
    isConnected(): boolean;
    isDeleteOnClose(): boolean;
    join(arg0: InetAddress, arg1: NetworkInterface): MembershipKey;
    join(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): MembershipKey;
    read(arg0: ByteBuffer): number;
    read(arg0: ByteBuffer[], arg1: number, arg2: number): number;
    receive(arg0: ByteBuffer): A;
    send(arg0: ByteBuffer, arg1: SocketAddress): number;
    setAncillaryReceiveBufferSize(arg0: number): void;
    setDeleteOnClose(arg0: boolean): void;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): AFDatagramChannel<A>;
    setShutdownOnClose(arg0: boolean): void;
    socket(): AFDatagramSocket<A>;
    supportedOptions(): SocketOption<Object>[];
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}