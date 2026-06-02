import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks5PrivateAuthStatus extends Object implements Comparable<Socks5PrivateAuthStatus> {
    static FAILURE: Socks5PrivateAuthStatus;
    static SUCCESS: Socks5PrivateAuthStatus;
    static valueOf(paramarg0: number): Socks5PrivateAuthStatus;
    private constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks5PrivateAuthStatus): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isSuccess(): boolean;
    toString(): string;
}