import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapDecoder$Implementation } from '../../../../com/mojang/serialization/MapDecoder$Implementation.d.ts'
import type { MapLike } from '../../../../com/mojang/serialization/MapLike.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FieldDecoder<A extends unknown> extends MapDecoder$Implementation<A> {
    constructor(arg0: string, arg1: Decoder<A>)
    // private elementCodec: Decoder<A>;
    // private name: string;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<A>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keys<T extends unknown>(arg0: DynamicOps<T>): Stream<T>;
    toString(): string;
}