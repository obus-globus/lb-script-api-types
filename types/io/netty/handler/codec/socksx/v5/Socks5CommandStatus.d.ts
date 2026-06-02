import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Socks5CommandStatus extends Object implements Comparable<Socks5CommandStatus> {
    static ADDRESS_UNSUPPORTED: Socks5CommandStatus;
    static COMMAND_UNSUPPORTED: Socks5CommandStatus;
    static CONNECTION_REFUSED: Socks5CommandStatus;
    static FAILURE: Socks5CommandStatus;
    static FORBIDDEN: Socks5CommandStatus;
    static HOST_UNREACHABLE: Socks5CommandStatus;
    static NETWORK_UNREACHABLE: Socks5CommandStatus;
    static SUCCESS: Socks5CommandStatus;
    static TTL_EXPIRED: Socks5CommandStatus;
    static valueOf(paramarg0: number): Socks5CommandStatus;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private byteValue: number;
    // private name: string;
    // private text: string;
    byteValue(): number;
    compareTo(arg0: Socks5CommandStatus): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isSuccess(): boolean;
    toString(): string;
}