import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { DatagramPacket } from '../../java/net/DatagramPacket.d.ts'
import type { DatagramSocketImpl } from '../../java/net/DatagramSocketImpl.d.ts'
import type { DatagramSocketImplFactory } from '../../java/net/DatagramSocketImplFactory.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../java/net/NetworkInterface.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../java/net/SocketOption.d.ts'
import type { DatagramChannel } from '../../java/nio/channels/DatagramChannel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class DatagramSocket extends Object implements Closeable {
    static setDatagramSocketImplFactory(paramarg0: DatagramSocketImplFactory): void;
    constructor()
    constructor(arg0: DatagramSocket)
    constructor(arg0: DatagramSocketImpl)
    constructor(arg0: SocketAddress)
    constructor(arg0: number)
    constructor(arg0: number, arg1: InetAddress)
    // private delegate: DatagramSocket;
    bind(arg0: SocketAddress): void;
    close(): void;
    connect(arg0: InetAddress, arg1: number): void;
    connect(arg0: SocketAddress): void;
    delegate(): DatagramSocket;
    disconnect(): void;
    getBroadcast(): boolean;
    getChannel(): DatagramChannel;
    getInetAddress(): InetAddress;
    getLocalAddress(): InetAddress;
    getLocalPort(): number;
    getLocalSocketAddress(): SocketAddress;
    getOption<T extends unknown>(arg0: SocketOption<T>): T;
    getPort(): number;
    getReceiveBufferSize(): number;
    getRemoteSocketAddress(): SocketAddress;
    getReuseAddress(): boolean;
    getSendBufferSize(): number;
    getSoTimeout(): number;
    getTrafficClass(): number;
    isBound(): boolean;
    isClosed(): boolean;
    isConnected(): boolean;
    joinGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    leaveGroup(arg0: SocketAddress, arg1: NetworkInterface): void;
    receive(arg0: DatagramPacket): void;
    send(arg0: DatagramPacket): void;
    setBroadcast(arg0: boolean): void;
    setOption<T extends unknown>(arg0: SocketOption<T>, arg1: T): DatagramSocket;
    setReceiveBufferSize(arg0: number): void;
    setReuseAddress(arg0: boolean): void;
    setSendBufferSize(arg0: number): void;
    setSoTimeout(arg0: number): void;
    setTrafficClass(arg0: number): void;
    supportedOptions(): SocketOption<Object>[];
}