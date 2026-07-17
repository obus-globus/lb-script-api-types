import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SocketAddress$Builder } from '../../../../../../org/apache/logging/log4j/core/net/SocketAddress$Builder.d.ts'
export class SocketAddress extends Object {
    static getLoopback(): SocketAddress;
    static newBuilder(): SocketAddress$Builder;
    private constructor(host: InetAddress, port: number)
    readonly socketAddress: InetSocketAddress;
    getAddress(): InetAddress;
    getHostName(): string;
    getPort(): number;
    getSocketAddress(): InetSocketAddress;
    toString(): string;
}