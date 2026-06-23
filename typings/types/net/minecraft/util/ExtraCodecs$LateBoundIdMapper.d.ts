import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExtraCodecs$LateBoundIdMapper<I extends unknown, V extends unknown> extends Object {
    constructor()
    // private idToValue: Map<I, V>;
    codec(idCodec: Codec<I>): Codec<V>;
    put(id: I, value: V): ExtraCodecs$LateBoundIdMapper<I, V>;
    values(): V[];
}