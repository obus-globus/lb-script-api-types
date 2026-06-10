import type { FullMappings } from '../../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { DynamicType$DataReader } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType$DataReader.d.ts'
import type { IdHolder } from '../../../../../../../com/viaversion/viaversion/util/IdHolder.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DynamicType$DataFiller extends Object {
    private constructor(null_: DynamicType$DataFiller, arg2: boolean)
    // private mappings: FullMappings;
    // private useMappedNames: boolean;
    reader<T extends IdHolder>(arg0: string, arg1: (param0: ByteBuf, param1: T) => void): DynamicType$DataFiller;
}