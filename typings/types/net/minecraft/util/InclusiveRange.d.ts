import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class InclusiveRange<T extends Comparable<T>> extends Record {
    static INT: Codec<InclusiveRange<number>>;
    static codec(paramelementCodec: Codec<Object>): Codec<InclusiveRange<Object>>;
    static codec(paramelementCodec: Codec<Object>, paramminAllowedInclusive: Object | null, parammaxAllowedInclusive: Object | null): Codec<InclusiveRange<Object>>;
    static create(paramminInclusive: Object | null, parammaxInclusive: Object | null): DataResult<InclusiveRange<Object>>;
    constructor(value: T)
    constructor(minInclusive: T, maxInclusive: T)
    // private maxInclusive: T;
    // private minInclusive: T;
    contains(subRange: InclusiveRange<T>): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isValueInRange(value: T): boolean;
    map<S extends Comparable<S>>(mapper: (param0: T) => S): InclusiveRange<S>;
    maxInclusive(): T;
    minInclusive(): T;
    toString(): string;
}