import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface StreamCodec$CodecOperation<B extends Object | number | string | boolean, S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    apply(original: StreamCodec<B, S>): StreamCodec<B, T>;
}