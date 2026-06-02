import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InventorySource } from '../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventorySource.d.ts'
export class ExperimentalBedrockTypes extends Object {
    static INVENTORY_SOURCE: Type<InventorySource>;
    static LEGACY_SET_ITEM_SLOT_DATA: Type<(Object | null)[]>;
    constructor()
}