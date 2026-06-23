import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface StreamCodec$CodecOperation<B extends unknown, S extends unknown, T extends unknown> extends Object{
    apply(original: StreamCodec<B, S>): StreamCodec<B, T>;
}