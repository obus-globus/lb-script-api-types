import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NetworkAddressJvmKt extends Object {
    static NetworkAddress(hostname: string, port: number): SocketAddress;
    static getAddress(paramarg0: SocketAddress): string;
    static getHostname(paramarg0: SocketAddress): string;
    static getPort(paramarg0: SocketAddress): number;
}