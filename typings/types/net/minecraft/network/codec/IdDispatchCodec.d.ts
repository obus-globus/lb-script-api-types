import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IdDispatchCodec$Builder } from '../../../../net/minecraft/network/codec/IdDispatchCodec$Builder.d.ts'
import type { IdDispatchCodec$Entry } from '../../../../net/minecraft/network/codec/IdDispatchCodec$Entry.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamCodec$CodecOperation } from '../../../../net/minecraft/network/codec/StreamCodec$CodecOperation.d.ts'
export class IdDispatchCodec<B extends ByteBuf, V extends unknown, T extends unknown> extends Object implements StreamCodec<B, V> {
    static builder<B extends ByteBuf, V extends unknown, T extends unknown>(paramtypeGetter: (param0: V) => T): IdDispatchCodec$Builder<B, V, T>;
    private constructor(typeGetter: (param0: V) => T, byId: IdDispatchCodec$Entry<B, V, T>[], toId: JavaMap<any, any>)
    // private byId: IdDispatchCodec$Entry<B, V, T>[];
    // private toId: JavaMap<any, any>;
    // private typeGetter: (param0: V) => T;
    apply<O extends unknown>(operation: (param0: StreamCodec<B, V>) => StreamCodec<B, O>): StreamCodec<B, O>;
    cast<S extends B>(): StreamCodec<S, V>;
    decode(input: B): V;
    dispatch<U extends unknown>(type: (param0: U) => V, codec: (param0: V) => StreamCodec<B, U>): StreamCodec<B, U>;
    encode(output: B, value: V): void;
    map<O extends unknown>(to: (param0: V) => O, from: (param0: O) => V): StreamCodec<B, O>;
    mapStream<O extends ByteBuf>(operation: (param0: O) => B): StreamCodec<O, V>;
}