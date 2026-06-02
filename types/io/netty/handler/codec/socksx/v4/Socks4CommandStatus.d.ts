import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks4CommandStatus extends Object implements Comparable<Socks4CommandStatus> {
    static IDENTD_AUTH_FAILURE: Socks4CommandStatus;
    static IDENTD_UNREACHABLE: Socks4CommandStatus;
    static REJECTED_OR_FAILED: Socks4CommandStatus;
    static SUCCESS: Socks4CommandStatus;
    static valueOf(paramarg0: number): Socks4CommandStatus;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks4CommandStatus): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isSuccess(): boolean;
    toString(): string;
}