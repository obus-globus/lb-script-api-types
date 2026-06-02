import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks5AddressType extends Object implements Comparable<Socks5AddressType> {
    static DOMAIN: Socks5AddressType;
    static IPv4: Socks5AddressType;
    static IPv6: Socks5AddressType;
    static valueOf(paramarg0: number): Socks5AddressType;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks5AddressType): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}