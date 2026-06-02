import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PreferStackSize extends Object {
    static INSTANCE: PreferStackSize;
    static PREFER_FEWER: (param0: ItemStack) => kotlin.Boolean;
    static PREFER_MORE: (param0: ItemStack) => kotlin.Boolean;
    PREFER_FEWER: (param0: ItemStack) => kotlin.Boolean;
    PREFER_MORE: (param0: ItemStack) => kotlin.Boolean;
}