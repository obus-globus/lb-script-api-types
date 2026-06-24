import type { Ops$ListSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$ListSerializer.d.ts'
import type { Ops$MapSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { HashOps } from '../../../../../com/viaversion/viaversion/codec/hash/HashOps.d.ts'
import type { HashOps$CollectionHashBuilder } from '../../../../../com/viaversion/viaversion/codec/hash/HashOps$CollectionHashBuilder.d.ts'
import type { HashOps$MapHashBuilder$Entry } from '../../../../../com/viaversion/viaversion/codec/hash/HashOps$MapHashBuilder$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HashOps$MapHashBuilder extends HashOps$CollectionHashBuilder implements Ops$MapSerializer {
    private constructor(null_: HashOps)
    // private entries: HashOps$MapHashBuilder$Entry[];
    applyHashToParent(): void;
    write<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V): Ops$MapSerializer;
    write<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V, arg3: V): Ops$MapSerializer;
    write<K extends unknown, T extends unknown>(arg0: Type<K>, arg1: K, arg2: Type<T>, arg3: T): Ops$MapSerializer;
    writeInlinedMap<T extends unknown>(arg0: Type<T>, arg1: T): Ops$MapSerializer;
    writeList(arg0: string, arg1: (param0: Ops$ListSerializer) => void): Ops$MapSerializer;
    writeMap(arg0: string, arg1: (param0: Ops$MapSerializer) => void): Ops$MapSerializer;
    writeOptional<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V): Ops$MapSerializer;
    writeOptional<V extends unknown>(arg0: string, arg1: Type<V>, arg2: V, arg3: V): Ops$MapSerializer;
}