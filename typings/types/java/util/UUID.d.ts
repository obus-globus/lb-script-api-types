import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class UUID extends Object implements Serializable, Comparable<UUID> {
    static fromString(paramarg0: string): UUID;
    static nameUUIDFromBytes(paramarg0: number[]): UUID;
    static randomUUID(): UUID;
    constructor(arg0: number, arg1: number)
    // private leastSigBits: number;
    // private mostSigBits: number;
    clockSequence(): number;
    compareTo(arg0: UUID): number;
    equals(arg0: Object | null): boolean;
    getLeastSignificantBits(): number;
    getMostSignificantBits(): number;
    hashCode(): number;
    node(): number;
    timestamp(): number;
    toString(): string;
    variant(): number;
    version(): number;
}