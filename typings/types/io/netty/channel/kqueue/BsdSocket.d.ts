import type { DefaultFileRegion } from '../../../../io/netty/channel/DefaultFileRegion.d.ts'
import type { AcceptFilter } from '../../../../io/netty/channel/kqueue/AcceptFilter.d.ts'
import type { InternetProtocolFamily } from '../../../../io/netty/channel/socket/InternetProtocolFamily.d.ts'
import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { IovArray } from '../../../../io/netty/channel/unix/IovArray.d.ts'
import type { PeerCredentials } from '../../../../io/netty/channel/unix/PeerCredentials.d.ts'
import type { Socket } from '../../../../io/netty/channel/unix/Socket.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BsdSocket extends Socket {
    static UDS_SUN_PATH_SIZE: number;
    static from(paramarg0: File): FileDescriptor;
    static from(paramarg0: string): FileDescriptor;
    static initialize(): void;
    static isIPv6Preferred(): boolean;
    static newSocketDgram(): BsdSocket;
    static newSocketDgram(paramarg0: InternetProtocolFamily): BsdSocket;
    static newSocketDgram(paramarg0: SocketProtocolFamily): BsdSocket;
    static newSocketDgram(): Socket;
    static newSocketDomain(): BsdSocket;
    static newSocketDomain(): Socket;
    static newSocketDomainDgram(): BsdSocket;
    static newSocketDomainDgram(): Socket;
    static newSocketStream(): BsdSocket;
    static newSocketStream(paramarg0: InternetProtocolFamily): BsdSocket;
    static newSocketStream(paramarg0: SocketProtocolFamily): BsdSocket;
    static newSocketStream(): Socket;
    static pipe(): (Object | null)[];
    static shouldUseIpv6(paramarg0: InternetProtocolFamily): boolean;
    static shouldUseIpv6(paramarg0: SocketProtocolFamily): boolean;
    constructor(arg0: number)
    connectx(arg0: InetSocketAddress, arg1: InetSocketAddress, arg2: IovArray, arg3: boolean): number;
    getAcceptFilter(): AcceptFilter;
    getPeerCredentials(): PeerCredentials;
    getSndLowAt(): number;
    isTcpFastOpen(): boolean;
    isTcpNoPush(): boolean;
    sendFile(arg0: DefaultFileRegion, arg1: number, arg2: number, arg3: number): number;
    setAcceptFilter(arg0: AcceptFilter): void;
    setSndLowAt(arg0: number): void;
    setTcpFastOpen(arg0: boolean): void;
    setTcpNoPush(arg0: boolean): void;
}