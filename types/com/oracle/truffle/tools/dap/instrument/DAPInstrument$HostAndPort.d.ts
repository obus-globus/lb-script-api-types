import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DAPInstrument$HostAndPort extends Object {
    private constructor()
    private constructor(host: string, port: number)
    private constructor(host: string, portStr: string)
    // private enabled: boolean;
    // private host: string;
    // private inetAddress: InetAddress;
    // private port: number;
    // private portStr: string;
    createSocket(): InetSocketAddress;
    getHostPort(): string;
    isEnabled(): boolean;
    toString(): string;
    verify(): void;
}