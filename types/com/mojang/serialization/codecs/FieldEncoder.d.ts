import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../../com/mojang/serialization/Encoder.d.ts'
import type { MapEncoder$Implementation } from '../../../../com/mojang/serialization/MapEncoder$Implementation.d.ts'
import type { RecordBuilder } from '../../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FieldEncoder<A extends Object | number | string | boolean> extends MapEncoder$Implementation<A> {
    constructor(arg0: string, arg1: Encoder<A>)
    // private elementCodec: Encoder<A>;
    // private name: string;
    encode(arg0: A, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keys(arg0: DynamicOps<T>): Stream<T>;
    toString(): string;
}