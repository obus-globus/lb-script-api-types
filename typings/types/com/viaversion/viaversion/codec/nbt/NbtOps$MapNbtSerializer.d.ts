import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Ops$ListSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$ListSerializer.d.ts'
import type { Ops$MapSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { NbtOps } from '../../../../../com/viaversion/viaversion/codec/nbt/NbtOps.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class NbtOps$MapNbtSerializer extends Object implements Ops$MapSerializer {
    private constructor(null_: NbtOps)
    // private tag: Map$Entry<string, Tag>[];
    // private serializeKey<K extends unknown>(arg0: Type<K>, arg1: K): string;
    write<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V): Ops$MapSerializer;
    write<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V, arg3: V): Ops$MapSerializer;
    write<K extends unknown, V extends unknown>(arg0: Type<K>, arg1: K, arg2: Type<V>, arg3: V): Ops$MapSerializer;
    writeInlinedMap<T extends unknown>(arg0: Type<T>, arg1: T): Ops$MapSerializer;
    writeList(arg0: string, arg1: (param0: Ops$ListSerializer) => void): Ops$MapSerializer;
    writeMap(arg0: string, arg1: (param0: Ops$MapSerializer) => void): Ops$MapSerializer;
    writeOptional<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V): Ops$MapSerializer;
    writeOptional<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V, arg3: V): Ops$MapSerializer;
}