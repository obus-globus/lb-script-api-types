import type { FileDescriptor } from '../../java/io/FileDescriptor.d.ts'
import type { DatagramPacket } from '../../java/net/DatagramPacket.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../java/net/SocketOption.d.ts'
import type { SocketOptions } from '../../java/net/SocketOptions.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class DatagramSocketImpl extends Object implements SocketOptions {
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
    // private fd: FileDescriptor;
    // private localPort: number;
    bind(arg0: number, arg1: InetAddress): void;
    close(): void;
    connect(arg0: InetAddress, arg1: number): void;
    create(): void;
    dataAvailable(): number;
    disconnect(): void;
    getFileDescriptor(): FileDescriptor;
    getLocalPort(): number;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    getTTL(): number;
    getTimeToLive(): number;
    join(arg0: InetAddress): void;
    joinGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    leave(arg0: InetAddress): void;
    leaveGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    peek(arg0: InetAddress): number;
    peekData(arg0: DatagramPacket): number;
    receive(arg0: DatagramPacket): void;
    send(arg0: DatagramPacket): void;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): void;
    setTTL(arg0: number): void;
    setTimeToLive(arg0: number): void;
    supportedOptions(): SocketOption<Object>[];
}