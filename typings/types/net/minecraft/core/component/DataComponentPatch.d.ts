import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentPatch$Builder } from '../../../../net/minecraft/core/component/DataComponentPatch$Builder.d.ts'
import type { DataComponentPatch$SplitResult } from '../../../../net/minecraft/core/component/DataComponentPatch$SplitResult.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DataComponentPatch extends Object {
    static CODEC: Codec<DataComponentPatch>;
    static DELIMITED_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPatch>;
    static EMPTY: DataComponentPatch;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPatch>;
    static builder(): DataComponentPatch$Builder;
    constructor(map: JavaMap<DataComponentType<Object>, Optional<Object>>)
    // private map: JavaMap<DataComponentType<Object>, Optional<Object>>;
    entrySet(): Map$Entry<DataComponentType<Object>, Optional<Object>>[];
    equals(obj: Object | null): boolean;
    forget(test: (param0: DataComponentType<Object>) => boolean): DataComponentPatch;
    get<T extends unknown>(prototype: DataComponentGetter, type: DataComponentType<T>): T;
    hashCode(): number;
    isEmpty(): boolean;
    size(): number;
    split(): DataComponentPatch$SplitResult;
    toString(): string;
}