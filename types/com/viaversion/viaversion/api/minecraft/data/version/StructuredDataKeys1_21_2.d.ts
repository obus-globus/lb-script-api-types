import type { StructuredDataKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { VersionedStructuredDataKeys } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/version/VersionedStructuredDataKeys.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { VersionedTypesHolder } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
export class StructuredDataKeys1_21_2 extends VersionedStructuredDataKeys {
    constructor(arg0: VersionedTypesHolder)
    bundleContents: StructuredDataKey<Item[]>;
    chargedProjectiles: StructuredDataKey<Item[]>;
    container: StructuredDataKey<Item[]>;
    useRemainder: StructuredDataKey<Item>;
}