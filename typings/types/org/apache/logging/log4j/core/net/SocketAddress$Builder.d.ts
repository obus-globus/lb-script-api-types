import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SocketAddress } from '../../../../../../org/apache/logging/log4j/core/net/SocketAddress.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SocketAddress$Builder extends Object implements Builder<SocketAddress> {
    constructor()
    // private host: InetAddress;
    // private port: number;
    build(): SocketAddress;
    getErrorPrefix(): string;
    isValid(): boolean;
    setHost(host: InetAddress): SocketAddress$Builder;
    setPort(port: number): SocketAddress$Builder;
}