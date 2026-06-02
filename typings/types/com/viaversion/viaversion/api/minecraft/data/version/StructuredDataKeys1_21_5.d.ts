import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { StructuredDataKeys1_21_2 } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_2.d.ts'
import type { AdventureModePredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AdventureModePredicate.d.ts'
import type { VersionedTypesHolder } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
export class StructuredDataKeys1_21_5 extends StructuredDataKeys1_21_2 {
    constructor(arg0: VersionedTypesHolder)
    canBreak: StructuredDataKey<AdventureModePredicate>;
    canPlaceOn: StructuredDataKey<AdventureModePredicate>;
}