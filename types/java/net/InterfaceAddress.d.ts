import type { Inet4Address } from '../../java/net/Inet4Address.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class InterfaceAddress extends Object {
    private constructor()
    readonly address: InetAddress;
    readonly broadcast: Inet4Address;
    // private maskLength: number;
    equals(arg0: Object | null): boolean;
    getAddress(): InetAddress;
    getBroadcast(): InetAddress;
    getNetworkPrefixLength(): number;
    hashCode(): number;
    toString(): string;
}