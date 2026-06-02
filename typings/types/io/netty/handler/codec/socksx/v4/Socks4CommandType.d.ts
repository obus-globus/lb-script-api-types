import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks4CommandType extends Object implements Comparable<Socks4CommandType> {
    static BIND: Socks4CommandType;
    static CONNECT: Socks4CommandType;
    static valueOf(paramarg0: number): Socks4CommandType;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks4CommandType): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}