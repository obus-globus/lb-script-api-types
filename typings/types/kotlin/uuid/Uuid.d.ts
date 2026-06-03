import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { Uuid$Companion } from '../../kotlin/uuid/Uuid$Companion.d.ts'
export class Uuid extends Object implements Serializable, Comparable<Uuid> {
    static Companion: Uuid$Companion;
    static SIZE_BITS: number;
    static SIZE_BYTES: number;
    private constructor(mostSignificantBits: number, leastSignificantBits: number)
    readonly leastSignificantBits: number;
    readonly mostSignificantBits: number;
    compareTo(other: Uuid): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    // private readObject(input: ObjectInputStream): void;
    toByteArray(): number[];
    toHexDashString(): string;
    toHexString(): string;
    toLongs<T extends Object | number | string | boolean>(action: (param0: number, param1: number) => T): T;
    toString(): string;
    toUByteArray(): (Object | null)[];
    toULongs<T extends Object | number | string | boolean>(action: (param0: ULong, param1: ULong) => T): T;
    // private writeReplace(): Object;
}