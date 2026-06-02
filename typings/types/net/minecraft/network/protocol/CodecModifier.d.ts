import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface CodecModifier<B extends Object | number | string | boolean, V extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object{
    apply(original: StreamCodec<B, V>, context: C): StreamCodec<B, V>;
}