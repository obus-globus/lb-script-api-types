import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Ops$ListSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$ListSerializer.d.ts'
import type { Ops$MapSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { NbtOps } from '../../../../../com/viaversion/viaversion/codec/nbt/NbtOps.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NbtOps$ListNbtSerializer extends Object implements Ops$ListSerializer {
    private constructor(null_: NbtOps)
    // private entries: Tag[];
    write<V extends unknown>(arg0: Type<V>, arg1: V): Ops$ListSerializer;
    writeList(arg0: (param0: Ops$ListSerializer) => void): Ops$ListSerializer;
    writeMap(arg0: (param0: Ops$MapSerializer) => void): Ops$ListSerializer;
}