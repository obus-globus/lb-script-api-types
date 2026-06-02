import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransferVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/TransferVariant.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentPatch } from '../../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ItemVariant extends Object, TransferVariant<Item>{
    componentsMatch(arg0: DataComponentPatch): boolean;
    getItem(): Item;
    hasComponents(): boolean;
    isOf<O extends Object | number | string | boolean>(arg0: O): boolean;
    matches(arg0: ItemStack): boolean;
    toStack(): ItemStack;
    toStack(arg0: number): ItemStack;
    typeHolder(): Holder<Item>;
    withComponents(arg0: DataComponentPatch): ItemVariant;
    withComponents(arg0: DataComponentPatch): TransferVariant<O>;
}