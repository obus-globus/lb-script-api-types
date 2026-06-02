import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
export interface ItemVariantCache extends Object{
    fabric_getCachedItemVariant(): ItemVariant;
}