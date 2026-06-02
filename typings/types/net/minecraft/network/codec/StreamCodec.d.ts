import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec$CodecOperation } from '../../../../net/minecraft/network/codec/StreamCodec$CodecOperation.d.ts'
import type { StreamDecoder } from '../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamEncoder } from '../../../../net/minecraft/network/codec/StreamEncoder.d.ts'
export interface StreamCodec<B extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object, StreamDecoder<B, V>, StreamEncoder<B, V>{
    apply(operation: (param0: B) => O): StreamCodec<B, O>;
    cast(): StreamCodec<S, V>;
    dispatch(type: (param0: U) => V, codec: (param0: V) => StreamCodec<B, U>): StreamCodec<B, U>;
    map(to: (param0: V) => O, from: (param0: O) => V): StreamCodec<B, O>;
    mapStream(operation: (param0: O) => B): StreamCodec<O, V>;
}