import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Socket } from '../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { SocketImpl } from '../../java/net/SocketImpl.d.ts'
import type { SocketImplFactory } from '../../java/net/SocketImplFactory.d.ts'
import type { SocketOption } from '../../java/net/SocketOption.d.ts'
import type { ServerSocketChannel } from '../../java/nio/channels/ServerSocketChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ServerSocket extends Object implements Closeable {
    static setSocketFactory(paramarg0: SocketImplFactory): void;
    constructor()
    constructor(arg0: SocketImpl)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: InetAddress)
    readonly bound: boolean;
    readonly closed: boolean;
    // private created: boolean;
    // private impl: SocketImpl;
    // private options: SocketOption<Object>[];
    // private socketLock: Object;
    accept(): Socket;
    bind(arg0: SocketAddress): void;
    bind(arg0: SocketAddress, arg1: number): void;
    close(): void;
    // private customImplAccept(arg0: SocketImpl): void;
    // private ensureCompatible(arg0: SocketImpl): void;
    getChannel(): ServerSocketChannel;
    // private getImpl(): SocketImpl;
    getInetAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): SocketAddress;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    getReceiveBufferSize(): number;
    getReuseAddress(): boolean;
    getSoTimeout(): number;
    // private implAccept(): SocketImpl;
    implAccept(arg0: Socket): void;
    // private implAccept(arg0: SocketImpl): void;
    isBound(): boolean;
    isClosed(): boolean;
    // private platformImplAccept(): SocketImpl;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): ServerSocket;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
    setReceiveBufferSize(arg0: number): void;
    setReuseAddress(arg0: boolean): void;
    setSoTimeout(arg0: number): void;
    supportedOptions(): SocketOption<Object>[];
    toString(): string;
}