import type { SocketAddress$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SocketAddress$Builder } from '../../../../../../org/apache/logging/log4j/core/net/SocketAddress$Builder.d.ts'
export class SocketAddress extends Object {
    static getLoopback(): SocketAddress;
    static newBuilder(): SocketAddress$Builder;
    private constructor(host: InetAddress, port: number)
    constructor(arg0: InetAddress, arg1: number, arg2: SocketAddress$1)
    readonly socketAddress: InetSocketAddress;
    getAddress(): InetAddress;
    getHostName(): string;
    getPort(): number;
    getSocketAddress(): InetSocketAddress;
    toString(): string;
}