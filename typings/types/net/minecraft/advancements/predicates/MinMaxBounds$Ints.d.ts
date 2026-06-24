import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { MinMaxBounds } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds.d.ts'
import type { MinMaxBounds$Bounds } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Bounds.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MinMaxBounds$Ints extends Record implements MinMaxBounds<number> {
    static ANY: MinMaxBounds$Ints;
    static CODEC: Codec<MinMaxBounds$Ints>;
    static ERROR_EMPTY: SimpleCommandExceptionType;
    static ERROR_SWAPPED: SimpleCommandExceptionType;
    static STREAM_CODEC: StreamCodec<ByteBuf, MinMaxBounds$Ints>;
    static atLeast(paramvalue: number): MinMaxBounds$Ints;
    static atMost(paramvalue: number): MinMaxBounds$Ints;
    static between(parammin: number, parammax: number): MinMaxBounds$Ints;
    static exactly(paramvalue: number): MinMaxBounds$Ints;
    static fromReader(paramreader: StringReader): MinMaxBounds$Ints;
    static validateContainedInRange(paramallowed: MinMaxBounds<Number>): (param0: Object | null) => DataResult<Object>;
    private constructor(bounds: MinMaxBounds$Bounds<number>)
    constructor(bounds: MinMaxBounds$Bounds<number>, boundsSqr: MinMaxBounds$Bounds<number>)
    // private bounds: MinMaxBounds$Bounds<number>;
    // private boundsSqr: MinMaxBounds$Bounds<number>;
    bounds(): MinMaxBounds$Bounds<number>;
    boundsSqr(): MinMaxBounds$Bounds<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isAny(): boolean;
    matches(value: number): boolean;
    matchesSqr(valueSqr: number): boolean;
    max(): Optional<number>;
    min(): Optional<number>;
    toString(): string;
}