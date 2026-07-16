import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MinMaxBounds$Bounds<T extends Number & Comparable<T>> extends Record {
    static any<T extends Number & Comparable<T>>(): MinMaxBounds$Bounds<T>;
    static atLeast<T extends Number & Comparable<T>>(paramvalue: T): MinMaxBounds$Bounds<T>;
    static atMost<T extends Number & Comparable<T>>(paramvalue: T): MinMaxBounds$Bounds<T>;
    static between<T extends Number & Comparable<T>>(parammin: T, parammax: T): MinMaxBounds$Bounds<T>;
    static createCodec<T extends Number & Comparable<T>>(paramnumberCodec: Codec<T>): Codec<MinMaxBounds$Bounds<T>>;
    static createStreamCodec<B extends ByteBuf, T extends Number & Comparable<T>>(paramnumberCodec: StreamCodec<B, T>): StreamCodec<B, MinMaxBounds$Bounds<T>>;
    static exactly<T extends Number & Comparable<T>>(paramvalue: T): MinMaxBounds$Bounds<T>;
    static fromReader<T extends Number & Comparable<T>>(paramreader: StringReader, paramconverter: (param0: string) => T, paramparseExc: () => DynamicCommandExceptionType): MinMaxBounds$Bounds<T>;
    constructor(min: Optional<T>, max: Optional<T>)
    // private max: Optional<T>;
    // private min: Optional<T>;
    areSwapped(): boolean;
    asPoint(): Optional<T>;
    asRange(): Range<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isAny(): boolean;
    map<U extends Number & Comparable<U>>(mapper: (param0: T) => U): MinMaxBounds$Bounds<U>;
    max(): Optional<T>;
    min(): Optional<T>;
    toString(): string;
    validateSwappedBoundsInCodec(): DataResult<MinMaxBounds$Bounds<T>>;
}