import type { Ops$MapSerializer } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Ops$ListSerializer extends Object {
    write<V extends Object | number | string | boolean>(arg0: Type<V>, arg1: V): Ops$ListSerializer;
    writeList(arg0: (param0: Ops$ListSerializer) => void): Ops$ListSerializer;
    writeMap(arg0: (param0: Ops$MapSerializer) => void): Ops$ListSerializer;
}