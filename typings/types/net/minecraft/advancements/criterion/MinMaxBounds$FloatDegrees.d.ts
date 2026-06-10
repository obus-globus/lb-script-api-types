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
import type { MinMaxBounds } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds.d.ts'
import type { MinMaxBounds$Bounds } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Bounds.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MinMaxBounds$FloatDegrees extends Record implements MinMaxBounds<number> {
    static ANY: MinMaxBounds$FloatDegrees;
    static CODEC: Codec<MinMaxBounds$FloatDegrees>;
    static ERROR_EMPTY: SimpleCommandExceptionType;
    static ERROR_SWAPPED: SimpleCommandExceptionType;
    static STREAM_CODEC: StreamCodec<ByteBuf, MinMaxBounds$FloatDegrees>;
    static fromReader(paramreader: StringReader): MinMaxBounds$FloatDegrees;
    static validateContainedInRange(paramallowed: MinMaxBounds<Number>): (param0: Object | null) => DataResult<Object>;
    constructor(bounds: MinMaxBounds$Bounds<number>)
    // private bounds: MinMaxBounds$Bounds<number>;
    bounds(): MinMaxBounds$Bounds<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isAny(): boolean;
    max(): Optional<number>;
    min(): Optional<number>;
    toString(): string;
}