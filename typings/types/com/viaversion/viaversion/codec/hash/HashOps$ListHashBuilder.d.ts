import type { Ops$ListSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$ListSerializer.d.ts'
import type { Ops$MapSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { HashOps } from '../../../../../com/viaversion/viaversion/codec/hash/HashOps.d.ts'
import type { HashOps$CollectionHashBuilder } from '../../../../../com/viaversion/viaversion/codec/hash/HashOps$CollectionHashBuilder.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HashOps$ListHashBuilder extends HashOps$CollectionHashBuilder implements Ops$ListSerializer {
    private constructor(null_: HashOps)
    // private entries: (Object | null)[];
    applyHashToParent(): void;
    write<T extends unknown>(arg0: Type<T>, arg1: T): Ops$ListSerializer;
    writeList(arg0: (param0: Ops$ListSerializer) => void): Ops$ListSerializer;
    writeMap(arg0: (param0: Ops$MapSerializer) => void): Ops$ListSerializer;
}