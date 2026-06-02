import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class SpdySessionStatus extends Object implements Comparable<SpdySessionStatus> {
    static INTERNAL_ERROR: SpdySessionStatus;
    static OK: SpdySessionStatus;
    static PROTOCOL_ERROR: SpdySessionStatus;
    static valueOf(paramarg0: number): SpdySessionStatus;
    constructor(arg0: number, arg1: string)
    // private code: number;
    // private statusPhrase: string;
    code(): number;
    compareTo(arg0: SpdySessionStatus): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    statusPhrase(): string;
    toString(): string;
}