import type { ItemBase } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/ItemBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HashedItem extends ItemBase, Object{
    amount(): number;
    copy(): HashedItem;
    dataHashesById(): { [key: string]: any };
    identifier(): number;
    isEmpty(): boolean;
    removedDataIds(): (Object | null)[];
    setAmount(arg0: number): void;
    setIdentifier(arg0: number): void;
}