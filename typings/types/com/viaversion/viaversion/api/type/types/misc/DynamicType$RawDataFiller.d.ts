import type { DynamicType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType.d.ts'
import type { DynamicType$DataReader } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$DataReader.d.ts'
import type { IdHolder } from '../../../../../../../com/viaversion/viaversion/util/IdHolder.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DynamicType$RawDataFiller extends Object {
    constructor(null_: DynamicType<IdHolder>)
    reader<T extends IdHolder>(arg0: number, arg1: (param0: ByteBuf, param1: T) => void): DynamicType$RawDataFiller;
}