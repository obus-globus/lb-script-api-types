import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec$CodecOperation } from '../../../../net/minecraft/network/codec/StreamCodec$CodecOperation.d.ts'
import type { StreamDecoder } from '../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamEncoder } from '../../../../net/minecraft/network/codec/StreamEncoder.d.ts'
export interface StreamCodec<B extends unknown, V extends unknown> extends Object, StreamDecoder<B, V>, StreamEncoder<B, V> {
    apply<O extends unknown>(operation: (param0: StreamCodec<B, V>) => StreamCodec<B, O>): StreamCodec<B, O>;
    cast<S extends B>(): StreamCodec<S, V>;
    dispatch<U extends unknown>(type: (param0: U) => V, codec: (param0: V) => StreamCodec<B, U>): StreamCodec<B, U>;
    map<O extends unknown>(to: (param0: V) => O, from: (param0: O) => V): StreamCodec<B, O>;
    mapStream<O extends ByteBuf>(operation: (param0: O) => B): StreamCodec<O, V>;
}