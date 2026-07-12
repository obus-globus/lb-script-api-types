import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EquipmentSlot } from '../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TrackedInventory extends Object {
    constructor()
    readonly items: ItemStack[];
    readonly timeMap: { [key: string]: any };
    /**
     * if slot type is armor then we check if the item is already in the tracked items
     * and if yes we remove it because it has been equipped
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleInventoryTracker.kt#L147 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleInventoryTracker.kt:147}
     */
    update(newItemStack: ItemStack, updatedSlot: EquipmentSlot): void;
}