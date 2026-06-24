import type { Ops$ListSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$ListSerializer.d.ts'
import type { Ops$MapSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { HashOps } from '../../../../../com/viaversion/viaversion/codec/hash/HashOps.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class HashOps$CollectionHashBuilder extends Object {
    private constructor(null_: HashOps)
    // private hasher: HashOps;
    hash<V extends unknown>(arg0: Type<V>, arg1: V): number;
    listHash(arg0: (param0: Ops$ListSerializer) => void): number;
    mapHash(arg0: (param0: Ops$MapSerializer) => void): number;
}