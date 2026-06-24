import type { FullMappings } from '../../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { StructuredDataType } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StructuredDataType$DataFiller extends Object {
    private constructor(null_: StructuredDataType, arg1: Protocol<any, any, any, any>)
    // private mappings: FullMappings;
    add(arg0: StructuredDataKey<Object>): StructuredDataType$DataFiller;
    add(arg0: StructuredDataKey<Object>[]): StructuredDataType$DataFiller;
}