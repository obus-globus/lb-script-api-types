import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TypedInstance } from '../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { FoodProperties } from '../../../../../net/minecraft/world/food/FoodProperties.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlocksAttacks } from '../../../../../net/minecraft/world/item/component/BlocksAttacks.d.ts'
import type { Tool } from '../../../../../net/minecraft/world/item/component/Tool.d.ts'
import type { Equippable } from '../../../../../net/minecraft/world/item/equipment/Equippable.d.ts'
export class ItemCategorizationsKt extends Object {
    static getArmorKnockbackResistance(paramarg0: DataComponentGetter): number;
    static getArmorToughness(paramarg0: DataComponentGetter): number;
    static getArmorValue(paramarg0: DataComponentGetter): number;
    /**
     * @see Items.SHIELD
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemCategorizations.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemCategorizations.kt:118}
     */
    static getBlocksAttacksComponent(paramarg0: DataComponentGetter): BlocksAttacks;
    static getEquipmentSlot(paramarg0: DataComponentGetter): EquipmentSlot;
    static getEquippableComponent(paramarg0: DataComponentGetter): Equippable;
    static getFoodComponent(paramarg0: DataComponentGetter): FoodProperties;
    static getToolComponent(paramarg0: DataComponentGetter): Tool;
    static isAnyChest(paramarg0: TypedInstance<Item>): boolean;
    static isAxe(paramarg0: TypedInstance<Item>): boolean;
    static isBundle(paramarg0: TypedInstance<Item>): boolean;
    static isChestArmor(paramarg0: TypedInstance<Item>): boolean;
    static isConsumable(paramarg0: ItemStack): boolean;
    static isFood(paramarg0: ItemStack): boolean;
    static isFootArmor(paramarg0: TypedInstance<Item>): boolean;
    static isHeadArmor(paramarg0: TypedInstance<Item>): boolean;
    static isHoe(paramarg0: TypedInstance<Item>): boolean;
    static isLegArmor(paramarg0: TypedInstance<Item>): boolean;
    /**
     * Replacement of 1.21.4 `MiningToolItem`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemCategorizations.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemCategorizations.kt:78}
     */
    static isMiningTool(paramarg0: TypedInstance<Item>): boolean;
    static isPickaxe(paramarg0: TypedInstance<Item>): boolean;
    static isPlayerArmor(paramarg0: TypedInstance<Item>): boolean;
    static isShovel(paramarg0: TypedInstance<Item>): boolean;
    static isSpear(paramarg0: TypedInstance<Item>): boolean;
    static isSword(paramarg0: TypedInstance<Item>): boolean;
}