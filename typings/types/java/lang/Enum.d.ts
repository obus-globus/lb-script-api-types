import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum$EnumDesc } from '../../java/lang/Enum$EnumDesc.d.ts'
import type { Optional } from '../../java/util/Optional.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export abstract class Enum<E extends Enum<E>> extends Object implements Serializable, Comparable<E> {
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    constructor(name: string, ordinal: number)
    /*not mapped: */ name(): string;
    /*not mapped: */ ordinal(): number;
    protected clone(): Object;
    compareTo(other: E): number;
    describeConstable(): Optional<Enum$EnumDesc<E>>;
    equals(other: Object | null): boolean;
    getDeclaringClass(): Class<E>;
    hashCode(): number;
    toString(): string;
}