import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeInetAddress extends Object {
    static address(paramarg0: number[], paramarg1: number, paramarg2: number): InetSocketAddress;
    static copyIpv4MappedIpv6Address(paramarg0: number[], paramarg1: number[]): void;
    static ipv4MappedIpv6Address(paramarg0: number[]): number[];
    static newInstance(paramarg0: InetAddress): NativeInetAddress;
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    // private address: number[];
    // private scopeId: number;
    address(): number[];
    scopeId(): number;
}