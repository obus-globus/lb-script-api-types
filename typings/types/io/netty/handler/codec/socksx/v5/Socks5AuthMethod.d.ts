import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks5AuthMethod extends Object implements Comparable<Socks5AuthMethod> {
    static GSSAPI: Socks5AuthMethod;
    static NO_AUTH: Socks5AuthMethod;
    static PASSWORD: Socks5AuthMethod;
    static UNACCEPTED: Socks5AuthMethod;
    static isPrivateMethod(paramarg0: number): boolean;
    static valueOf(paramarg0: number): Socks5AuthMethod;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks5AuthMethod): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}