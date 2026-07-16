import type { DefaultFileRegion } from '../../../../io/netty/channel/DefaultFileRegion.d.ts'
import type { EpollTcpInfo } from '../../../../io/netty/channel/epoll/EpollTcpInfo.d.ts'
import type { NativeDatagramPacketArray$NativeDatagramPacket } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray$NativeDatagramPacket.d.ts'
import type { VSockAddress } from '../../../../io/netty/channel/epoll/VSockAddress.d.ts'
import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { PeerCredentials } from '../../../../io/netty/channel/unix/PeerCredentials.d.ts'
import type { Socket } from '../../../../io/netty/channel/unix/Socket.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
export class LinuxSocket extends Socket {
    static UDS_SUN_PATH_SIZE: number;
    static from(paramarg0: File): FileDescriptor;
    static from(paramarg0: string): FileDescriptor;
    static initialize(): void;
    static isIPv6Preferred(): boolean;
    static newSocket(paramarg0: number): LinuxSocket;
    static newSocketDgram(): LinuxSocket;
    static newSocketDgram(paramarg0: boolean): LinuxSocket;
    static newSocketDgram(paramarg0: InternetProtocolFamily): LinuxSocket;
    static newSocketDgram(paramarg0: SocketProtocolFamily): LinuxSocket;
    static newSocketDgram(): Socket;
    static newSocketDomain(): LinuxSocket;
    static newSocketDomain(): Socket;
    static newSocketDomainDgram(): LinuxSocket;
    static newSocketDomainDgram(): Socket;
    static newSocketStream(): LinuxSocket;
    static newSocketStream(paramarg0: boolean): LinuxSocket;
    static newSocketStream(paramarg0: InternetProtocolFamily): LinuxSocket;
    static newSocketStream(paramarg0: SocketProtocolFamily): LinuxSocket;
    static newSocketStream(): Socket;
    static newVSockStream(): LinuxSocket;
    static pipe(): FileDescriptor[];
    static shouldUseIpv6(paramarg0: InternetProtocolFamily): boolean;
    static shouldUseIpv6(paramarg0: SocketProtocolFamily): boolean;
    constructor(arg0: number)
    bindVSock(arg0: VSockAddress): void;
    connectVSock(arg0: VSockAddress): boolean;
    family(): SocketProtocolFamily;
    getInterface(): InetAddress;
    getNetworkInterface(): NetworkInterface;
    getPeerCredentials(): PeerCredentials;
    getSoBusyPoll(): number;
    getTcpDeferAccept(): number;
    getTcpInfo(arg0: EpollTcpInfo): void;
    getTcpKeepCnt(): number;
    getTcpKeepIdle(): number;
    getTcpKeepIntvl(): number;
    getTcpNotSentLowAt(): number;
    getTcpUserTimeout(): number;
    getTimeToLive(): number;
    isIpBindAddressNoPort(): boolean;
    isIpFreeBind(): boolean;
    isIpMulticastAll(): boolean;
    isIpRecvOrigDestAddr(): boolean;
    isIpTransparent(): boolean;
    isLoopbackModeDisabled(): boolean;
    isTcpCork(): boolean;
    isTcpQuickAck(): boolean;
    isUdpGro(): boolean;
    joinGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): void;
    leaveGroup(arg0: InetAddress, arg1: NetworkInterface, arg2: InetAddress): void;
    localVSockAddress(): VSockAddress;
    recvmmsg(arg0: NativeDatagramPacketArray$NativeDatagramPacket[], arg1: number, arg2: number): number;
    recvmsg(arg0: NativeDatagramPacketArray$NativeDatagramPacket): number;
    remoteVSockAddress(): VSockAddress;
    sendFile(arg0: DefaultFileRegion, arg1: number, arg2: number, arg3: number): number;
    sendmmsg(arg0: NativeDatagramPacketArray$NativeDatagramPacket[], arg1: number, arg2: number): number;
    setInterface(arg0: InetAddress): void;
    setIpBindAddressNoPort(arg0: boolean): void;
    setIpFreeBind(arg0: boolean): void;
    setIpMulticastAll(arg0: boolean): void;
    setIpRecvOrigDestAddr(arg0: boolean): void;
    setIpTransparent(arg0: boolean): void;
    setLoopbackModeDisabled(arg0: boolean): void;
    setNetworkInterface(arg0: NetworkInterface): void;
    setSoBusyPoll(arg0: number): void;
    setTcpCork(arg0: boolean): void;
    setTcpDeferAccept(arg0: number): void;
    setTcpFastOpen(arg0: number): void;
    setTcpKeepCnt(arg0: number): void;
    setTcpKeepIdle(arg0: number): void;
    setTcpKeepIntvl(arg0: number): void;
    setTcpMd5Sig(arg0: InetAddress, arg1: number[]): void;
    setTcpNotSentLowAt(arg0: number): void;
    setTcpQuickAck(arg0: boolean): void;
    setTcpUserTimeout(arg0: number): void;
    setTimeToLive(arg0: number): void;
    setUdpGro(arg0: boolean): void;
}