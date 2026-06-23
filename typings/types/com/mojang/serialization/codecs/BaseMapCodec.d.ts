import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapLike } from '../../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BaseMapCodec<K extends unknown, V extends unknown> extends Object{
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: MapLike<T>): DataResult<Map<K, V>>;
    elementCodec(): Codec<V>;
    encode<T extends unknown>(arg0: Map<K, V>, arg1: DynamicOps<T>, arg2: RecordBuilder<T>): RecordBuilder<T>;
    keyCodec(): Codec<K>;
}