import type { HealthBasedBuff } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/HealthBasedBuff.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Soup extends HealthBasedBuff {
    static INSTANCE: Soup;
    execute(slot: HotbarItemSlot): void;
    isValidItem(stack: ItemStack, forUse: boolean): boolean;
}