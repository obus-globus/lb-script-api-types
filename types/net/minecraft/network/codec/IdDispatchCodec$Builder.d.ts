import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IdDispatchCodec } from '../../../../net/minecraft/network/codec/IdDispatchCodec.d.ts'
import type { IdDispatchCodec$Entry } from '../../../../net/minecraft/network/codec/IdDispatchCodec$Entry.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class IdDispatchCodec$Builder<B extends ByteBuf, V extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object {
    private constructor(typeGetter: (param0: V) => T)
    // private entries: IdDispatchCodec$Entry<B, V, T>[];
    // private typeGetter: (param0: V) => T;
    add(type: T, serializer: StreamCodec<B, V>): IdDispatchCodec$Builder<B, V, T>;
    build(): IdDispatchCodec<B, V, T>;
}