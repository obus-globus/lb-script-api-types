import type { FileDescriptor } from '../../java/io/FileDescriptor.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../java/net/SocketOption.d.ts'
import type { SocketOptions } from '../../java/net/SocketOptions.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class SocketImpl extends Object implements SocketOptions {
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
    constructor()
    // private address: InetAddress;
    // private fd: FileDescriptor;
    // private localport: number;
    // private port: number;
    accept(arg0: SocketImpl): void;
    available(): number;
    bind(arg0: InetAddress, arg1: number): void;
    close(): void;
    closeQuietly(): void;
    connect(arg0: InetAddress, arg1: number): void;
    connect(arg0: SocketAddress, arg1: number): void;
    connect(arg0: string, arg1: number): void;
    copyOptionsTo(arg0: SocketImpl): void;
    create(arg0: boolean): void;
    getFileDescriptor(): FileDescriptor;
    getInetAddress(): InetAddress;
    getInputStream(): InputStream;
    getLocalPort(): number;
    getOption<T extends unknown>(arg0: SocketOption<T>): T;
    getOutputStream(): OutputStream;
    getPort(): number;
    listen(arg0: number): void;
    reset(): void;
    sendUrgentData(arg0: number): void;
    setOption<T extends unknown>(arg0: SocketOption<T>, arg1: T): void;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
    shutdownInput(): void;
    shutdownOutput(): void;
    supportedOptions(): SocketOption<Object>[];
    supportsUrgentData(): boolean;
    toString(): string;
}