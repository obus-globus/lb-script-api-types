import type { FullMappings } from '../../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StructuredDataType$DataFiller extends Object {
    private constructor(null_: StructuredDataType$DataFiller)
    // private mappings: FullMappings;
    add(arg0: StructuredDataKey<Object>): StructuredDataType$DataFiller;
    add(arg0: StructuredDataKey<Object>[]): StructuredDataType$DataFiller;
    add(arg0: E[]): StructuredDataType$DataFiller;
}