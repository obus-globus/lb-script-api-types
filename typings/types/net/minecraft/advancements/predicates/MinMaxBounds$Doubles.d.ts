import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds.d.ts'
import type { MinMaxBounds$Bounds } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Bounds.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MinMaxBounds$Doubles extends Record implements MinMaxBounds<number> {
    static ANY: MinMaxBounds$Doubles;
    static CODEC: Codec<MinMaxBounds$Doubles>;
    static ERROR_EMPTY: SimpleCommandExceptionType;
    static ERROR_SWAPPED: SimpleCommandExceptionType;
    static STREAM_CODEC: StreamCodec<ByteBuf, MinMaxBounds$Doubles>;
    static atLeast(paramvalue: number): MinMaxBounds$Doubles;
    static atMost(paramvalue: number): MinMaxBounds$Doubles;
    static between(parammin: number, parammax: number): MinMaxBounds$Doubles;
    static exactly(paramvalue: number): MinMaxBounds$Doubles;
    static fromReader(paramreader: StringReader): MinMaxBounds$Doubles;
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