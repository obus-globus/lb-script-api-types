import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks5PasswordAuthStatus extends Object implements Comparable<Socks5PasswordAuthStatus> {
    static FAILURE: Socks5PasswordAuthStatus;
    static SUCCESS: Socks5PasswordAuthStatus;
    static valueOf(paramarg0: number): Socks5PasswordAuthStatus;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks5PasswordAuthStatus): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isSuccess(): boolean;
    toString(): string;
}