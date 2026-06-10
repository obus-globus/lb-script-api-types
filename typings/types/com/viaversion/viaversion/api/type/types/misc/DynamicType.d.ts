import type { FullMappings } from '../../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { DynamicType$DataFiller } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$DataFiller.d.ts'
import type { DynamicType$DataReader } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$DataReader.d.ts'
import type { DynamicType$RawDataFiller } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$RawDataFiller.d.ts'
import type { IdHolder } from '../../../../../../../com/viaversion/viaversion/util/IdHolder.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class DynamicType<T extends IdHolder> extends Type<T> {
    constructor(arg0: Int2ObjectMap<(param0: ByteBuf, param1: T) => void>, arg1: Class<T>)
    constructor(arg0: Class<T>)
    // private readers: Int2ObjectMap<(param0: ByteBuf, param1: T) => void>;
    filler(arg0: Protocol<Object, Object, Object, Object>): DynamicType$DataFiller;
    filler(arg0: Protocol<Object, Object, Object, Object>, arg1: boolean): DynamicType$DataFiller;
    mappings(arg0: Protocol<Object, Object, Object, Object>): FullMappings;
    rawFiller(): DynamicType$RawDataFiller;
    readData(arg0: ByteBuf, arg1: T): void;
}