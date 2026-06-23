import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSelectorProvider } from '../../../../org/newsclub/net/unix/AFSelectorProvider.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketCore } from '../../../../org/newsclub/net/unix/AFSocketCore.d.ts'
import type { AFSocketExtensions } from '../../../../org/newsclub/net/unix/AFSocketExtensions.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { AFSomeSocketChannel } from '../../../../org/newsclub/net/unix/AFSomeSocketChannel.d.ts'
export abstract class AFSocketChannel<A extends AFSocketAddress> extends SocketChannel implements AFSocketExtensions, AFSomeSocket, AFSomeSocketChannel {
    static open(): SocketChannel;
    static open(paramarg0: SocketAddress): SocketChannel;
    static open(paramarg0: ProtocolFamily): SocketChannel;
    constructor(arg0: AFSocket<A>, arg1: AFSelectorProvider<A>)
    // private afSocket: AFSocket<A>;
    // private connectPending: AtomicBoolean;
    bind(arg0: SocketAddress): AFSocketChannel<A>;
    connect(arg0: SocketAddress): boolean;
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    finishConnect(): boolean;
    getAFCore(): AFSocketCore;
    getAFSocket(): AFSocket<A>;
    getAncillaryReceiveBufferSize(): number;
    getFileDescriptor(): FileDescriptor;
    getLocalAddress(): A;
    getLocalSocketAddress(): A;
    getOption<T extends unknown>(arg0: SocketOption<T>): T;
    getRemoteAddress(): A;
    getRemoteSocketAddress(): A;
    implCloseSelectableChannel(): void;
    implConfigureBlocking(arg0: boolean): void;
    isConnected(): boolean;
    isConnectionPending(): boolean;
    read(arg0: ByteBuffer): number;
    read(arg0: ByteBuffer[]): number;
    read(arg0: ByteBuffer[], arg1: number, arg2: number): number;
    setAncillaryReceiveBufferSize(arg0: number): void;
    setOption<T extends unknown>(arg0: SocketOption<T>, arg1: T): AFSocketChannel<A>;
    setShutdownOnClose(arg0: boolean): void;
    shutdownInput(): AFSocketChannel<A>;
    shutdownOutput(): AFSocketChannel<A>;
    socket(): AFSocket<A>;
    supportedOptions(): SocketOption<Object>[];
    toString(): string;
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer[]): number;
    write(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}