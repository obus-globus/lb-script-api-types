import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { DatagramSocketAddress } from '../../../../io/netty/channel/unix/DatagramSocketAddress.d.ts'
import type { DomainDatagramSocketAddress } from '../../../../io/netty/channel/unix/DomainDatagramSocketAddress.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Socket extends FileDescriptor {
    static UDS_SUN_PATH_SIZE: number;
    static from(paramarg0: File): FileDescriptor;
    static from(paramarg0: string): FileDescriptor;
    static initialize(): void;
    static isIPv6Preferred(): boolean;
    static newSocketDgram(): Socket;
    static newSocketDomain(): Socket;
    static newSocketDomainDgram(): Socket;
    static newSocketStream(): Socket;
    static pipe(): (Object | null)[];
    static shouldUseIpv6(paramarg0: InternetProtocolFamily): boolean;
    static shouldUseIpv6(paramarg0: SocketProtocolFamily): boolean;
    constructor(arg0: number)
    // private ipv6: boolean;
    accept(arg0: number[]): number;
    bind(arg0: SocketAddress): void;
    connect(arg0: SocketAddress): boolean;
    disconnect(): void;
    finishConnect(): boolean;
    getIntOpt(arg0: number, arg1: number): number;
    getRawOpt(arg0: number, arg1: number, arg2: ByteBuffer): void;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getSoError(): number;
    getSoLinger(): number;
    getTrafficClass(): number;
    isBroadcast(): boolean;
    isInputShutdown(): boolean;
    isKeepAlive(): boolean;
    isOutputShutdown(): boolean;
    isReuseAddress(): boolean;
    isReusePort(): boolean;
    isShutdown(): boolean;
    isTcpNoDelay(): boolean;
    listen(arg0: number): void;
    localAddress(): InetSocketAddress;
    localDomainSocketAddress(): DomainSocketAddress;
    recv(arg0: ByteBuffer, arg1: number, arg2: number): number;
    recvAddress(arg0: number, arg1: number, arg2: number): number;
    recvFd(): number;
    recvFrom(arg0: ByteBuffer, arg1: number, arg2: number): DatagramSocketAddress;
    recvFromAddress(arg0: number, arg1: number, arg2: number): DatagramSocketAddress;
    recvFromAddressDomainSocket(arg0: number, arg1: number, arg2: number): DomainDatagramSocketAddress;
    recvFromDomainSocket(arg0: ByteBuffer, arg1: number, arg2: number): DomainDatagramSocketAddress;
    remoteAddress(): InetSocketAddress;
    remoteDomainSocketAddress(): DomainSocketAddress;
    send(arg0: ByteBuffer, arg1: number, arg2: number): number;
    sendAddress(arg0: number, arg1: number, arg2: number): number;
    sendFd(arg0: number): number;
    sendTo(arg0: ByteBuffer, arg1: number, arg2: number, arg3: InetAddress, arg4: number): number;
    sendTo(arg0: ByteBuffer, arg1: number, arg2: number, arg3: InetAddress, arg4: number, arg5: boolean): number;
    sendToAddress(arg0: number, arg1: number, arg2: number, arg3: InetAddress, arg4: number): number;
    sendToAddress(arg0: number, arg1: number, arg2: number, arg3: InetAddress, arg4: number, arg5: boolean): number;
    sendToAddressDomainSocket(arg0: number, arg1: number, arg2: number, arg3: number[]): number;
    sendToAddresses(arg0: number, arg1: number, arg2: InetAddress, arg3: number): number;
    sendToAddresses(arg0: number, arg1: number, arg2: InetAddress, arg3: number, arg4: boolean): number;
    sendToAddressesDomainSocket(arg0: number, arg1: number, arg2: number[]): number;
    sendToDomainSocket(arg0: ByteBuffer, arg1: number, arg2: number, arg3: number[]): number;
    setBroadcast(arg0: boolean): void;
    setIntOpt(arg0: number, arg1: number, arg2: number): void;
    setKeepAlive(arg0: boolean): void;
    setRawOpt(arg0: number, arg1: number, arg2: ByteBuffer): void;
    setReceiveBufferSize(arg0: number): void;
    setReuseAddress(arg0: boolean): void;
    setReusePort(arg0: boolean): void;
    setSendBufferSize(arg0: number): void;
    setSoLinger(arg0: number): void;
    setTcpNoDelay(arg0: boolean): void;
    setTrafficClass(arg0: number): void;
    shutdown(): void;
    shutdown(arg0: boolean, arg1: boolean): void;
    toString(): string;
    // private useIpv6(arg0: InetAddress): boolean;
}