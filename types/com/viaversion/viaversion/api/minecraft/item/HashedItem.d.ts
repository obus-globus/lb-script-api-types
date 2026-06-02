import type { ItemBase } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/ItemBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HashedItem extends ItemBase, Object{
    copy(): HashedItem;
    dataHashesById(): Int2IntMap;
    isEmpty(): boolean;
    removedDataIds(): (Object | null)[];
}