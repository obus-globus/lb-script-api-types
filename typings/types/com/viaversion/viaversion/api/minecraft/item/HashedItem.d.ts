import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ItemBase } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/ItemBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HashedItem extends ItemBase, Object{
    amount(): number;
    copy(): HashedItem;
    dataHashesById(): JavaMap<any, any>;
    identifier(): number;
    isEmpty(): boolean;
    removedDataIds(): (Object | null)[];
    setAmount(arg0: number): void;
    setIdentifier(arg0: number): void;
}