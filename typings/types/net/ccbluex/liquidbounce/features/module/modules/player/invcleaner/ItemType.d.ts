import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { ItemCategory } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFunction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemFunction.d.ts'
import type { Priority } from '../../../../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
export class ItemType extends Enum<ItemType> {
    static ARMOR: ItemType;
    static ARROW: ItemType;
    static BLOCK: ItemType;
    static BOW: ItemType;
    static BUCKET: ItemType;
    static CROSSBOW: ItemType;
    static FOOD: ItemType;
    static GAPPLE: ItemType;
    static MACE: ItemType;
    static NONE: ItemType;
    static PEARL: ItemType;
    static POTION: ItemType;
    static ROD: ItemType;
    static SHIELD: ItemType;
    static SPEAR: ItemType;
    static SWORD: ItemType;
    static THROWABLE: ItemType;
    static TOOL: ItemType;
    static WEAPON: ItemType;
    static getEntries(): ItemType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ItemType;
    static values(): ItemType[];
    private constructor(oneIsSufficient: boolean, allocationPriority: Priority, providedFunction: ItemFunction | null)
    /**
     * Higher priority means the item category is filled in first.
     *
     * This is important for example for specializations. If we have a weapon slot and an axe slot, an axe would
     * fit in both slots, but because the player specifically requested an axe, the best axe should be filled in first
     * with the best available axe.
     *
     * ## Used values
     * - Specialization (see above): 10 per level
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategorization.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategorization.kt:102}
     */
    readonly allocationPriority: Priority;
    readonly defaultCategory: ItemCategory;
    readonly oneIsSufficient: boolean;
    /**
     * The user maybe wants to filter the items by a specific type, but they don't always want all versions of the item.
     * To stop the invcleaner from keeping items of every type, we can specify what function a specific item serves.
     * If that function is already served, we can just ignore it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategorization.kt#L108 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategorization.kt:108}
     */
    readonly providedFunction: ItemFunction | null;
    name(): "ARMOR" | "SWORD" | "WEAPON" | "SPEAR" | "MACE" | "BOW" | "CROSSBOW" | "ARROW" | "TOOL" | "ROD" | "THROWABLE" | "SHIELD" | "FOOD" | "BUCKET" | "PEARL" | "GAPPLE" | "POTION" | "BLOCK" | "NONE";
}