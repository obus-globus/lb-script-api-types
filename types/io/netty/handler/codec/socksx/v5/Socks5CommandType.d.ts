import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks5CommandType extends Object implements Comparable<Socks5CommandType> {
    static BIND: Socks5CommandType;
    static CONNECT: Socks5CommandType;
    static UDP_ASSOCIATE: Socks5CommandType;
    static valueOf(paramarg0: number): Socks5CommandType;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks5CommandType): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}