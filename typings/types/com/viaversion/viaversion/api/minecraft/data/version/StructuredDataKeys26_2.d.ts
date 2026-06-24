import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { StructuredDataKeys1_21_11 } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_11.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { VersionedTypesHolder } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
export class StructuredDataKeys26_2 extends StructuredDataKeys1_21_11 {
    constructor(arg0: VersionedTypesHolder)
    sulfurCubeContent: StructuredDataKey<Item>;
}