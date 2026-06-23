import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExpirableValue<T extends unknown> extends Record {
    static codec(paramvalueCodec: Codec<Object>): Codec<ExpirableValue<Object>>;
    static of(paramvalue: Object | null): ExpirableValue<Object>;
    static of(paramvalue: Object | null, paramticksUntilExpiry: number): ExpirableValue<Object>;
    constructor(value: T, timeToLive: Optional<number>)
    // private timeToLive: Optional<number>;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    timeToLive(): Optional<number>;
    toString(): string;
    value(): T;
}