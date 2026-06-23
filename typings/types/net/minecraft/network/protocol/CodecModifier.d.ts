import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export interface CodecModifier<B extends unknown, V extends unknown, C extends unknown> extends Object{
    apply(original: StreamCodec<B, V>, context: C): StreamCodec<B, V>;
}