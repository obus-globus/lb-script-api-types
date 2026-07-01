import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Proxy } from '../../java/net/Proxy.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { SocketImpl } from '../../java/net/SocketImpl.d.ts'
import type { SocketImplFactory } from '../../java/net/SocketImplFactory.d.ts'
import type { SocketOption } from '../../java/net/SocketOption.d.ts'
import type { SocketChannel } from '../../java/nio/channels/SocketChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class Socket extends Object implements Closeable {
    static setSocketImplFactory(paramarg0: SocketImplFactory): void;
    constructor()
    constructor(arg0: InetAddress, arg1: number)
    constructor(arg0: InetAddress, arg1: number, arg2: InetAddress, arg3: number)
    constructor(arg0: InetAddress, arg1: number, arg2: boolean)
    constructor(arg0: Proxy)
    constructor(arg0: SocketImpl)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: InetAddress, arg3: number)
    constructor(arg0: string, arg1: number, arg2: boolean)
    // private impl: SocketImpl;
    // private in: InputStream;
    // private options: SocketOption<Object>[];
    // private out: OutputStream;
    // private socketLock: Object;
    // private state: number;
    bind(arg0: SocketAddress): void;
    // private checkAddress(arg0: InetAddress, arg1: string): void;
    close(): void;
    // private closeSuppressingExceptions(arg0: Throwable): void;
    connect(arg0: SocketAddress): void;
    connect(arg0: SocketAddress, arg1: number): void;
    // private getAndBitwiseOrState(arg0: number): number;
    getChannel(): SocketChannel;
    // private getImpl(): SocketImpl;
    getInetAddress(): InetAddress;
    getInputStream(): InputStream;
    getKeepAlive(): boolean;
    getLocalAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): SocketAddress;
    getOOBInline(): boolean;
    getOption<T extends unknown>(arg0: SocketOption<T>): T;
    getOutputStream(): OutputStream;
    getPort(): number;
    getReceiveBufferSize(): number;
    getRemoteSocketAddress(): SocketAddress;
    getReuseAddress(): boolean;
    getSendBufferSize(): number;
    getSoLinger(): number;
    getSoTimeout(): number;
    getTcpNoDelay(): boolean;
    getTrafficClass(): number;
    impl(): SocketImpl;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    isInputShutdown(): boolean;
    isOutputShutdown(): boolean;
    sendUrgentData(arg0: number): void;
    setConnected(): void;
    setConnectedImpl(arg0: SocketImpl): void;
    setImpl(arg0: SocketImpl): void;
    setKeepAlive(arg0: boolean): void;
    setOOBInline(arg0: boolean): void;
    setOption<T extends unknown>(arg0: SocketOption<T>, arg1: T): Socket;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
    setReceiveBufferSize(arg0: number): void;
    setReuseAddress(arg0: boolean): void;
    setSendBufferSize(arg0: number): void;
    setSoLinger(arg0: boolean, arg1: number): void;
    setSoTimeout(arg0: number): void;
    setTcpNoDelay(arg0: boolean): void;
    setTrafficClass(arg0: number): void;
    shutdownInput(): void;
    shutdownOutput(): void;
    supportedOptions(): SocketOption<Object>[];
    toString(): string;
}