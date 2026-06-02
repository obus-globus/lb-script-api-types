import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class MinMaxBounds$Bounds<T extends Number & Comparable<T>> extends Record {
    static any(): MinMaxBounds$Bounds<Object>;
    static atLeast(paramvalue: Object | null): MinMaxBounds$Bounds<Object>;
    static atMost(paramvalue: Object | null): MinMaxBounds$Bounds<Object>;
    static between(parammin: Object | null, parammax: Object | null): MinMaxBounds$Bounds<Object>;
    static exactly(paramvalue: Object | null): MinMaxBounds$Bounds<Object>;
    static fromReader(paramreader: StringReader, paramconverter: (param0: string) => Object | null, paramparseExc: () => DynamicCommandExceptionType): MinMaxBounds$Bounds<Object>;
    constructor(min: Optional<T>, max: Optional<T>)
    // private max: Optional<T>;
    // private min: Optional<T>;
    areSwapped(): boolean;
    asPoint(): Optional<T>;
    asRange(): Range<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isAny(): boolean;
    map(mapper: (param0: T) => U): MinMaxBounds$Bounds<U>;
    max(): Optional<T>;
    min(): Optional<T>;
    toString(): string;
    validateSwappedBoundsInCodec(): DataResult<MinMaxBounds$Bounds<T>>;
}