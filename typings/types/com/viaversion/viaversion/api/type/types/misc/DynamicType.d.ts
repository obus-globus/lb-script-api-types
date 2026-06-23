import type { FullMappings } from '../../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { DynamicType$DataFiller } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$DataFiller.d.ts'
import type { DynamicType$RawDataFiller } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$RawDataFiller.d.ts'
import type { IdHolder } from '../../../../../../../com/viaversion/viaversion/util/IdHolder.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
export abstract class DynamicType<T extends IdHolder> extends Type<T> {
    constructor(arg0: { [key: string]: any }, arg1: Class<T>)
    constructor(arg0: Class<T>)
    // private readers: { [key: string]: any };
    filler(arg0: Protocol<any, any, any, any>): DynamicType$DataFiller;
    filler(arg0: Protocol<any, any, any, any>, arg1: boolean): DynamicType$DataFiller;
    mappings(arg0: Protocol<any, any, any, any>): FullMappings;
    rawFiller(): DynamicType$RawDataFiller;
    readData(arg0: ByteBuf, arg1: T): void;
}