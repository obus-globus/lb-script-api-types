import type { InetAddress } from '../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LSPInstrument$HostAndPort extends Object {
    private constructor(host: string, port: number)
    private constructor(host: string, portStr: string)
    // private host: string;
    // private inetAddress: InetAddress;
    // private port: number;
    // private portStr: string;
    createSocket(): InetSocketAddress;
    getHostPort(): string;
    toString(): string;
    verify(): void;
}