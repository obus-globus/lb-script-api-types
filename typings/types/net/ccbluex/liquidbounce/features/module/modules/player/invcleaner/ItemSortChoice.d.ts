import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ItemCategory } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemSortChoice extends Enum<ItemSortChoice> implements Tagged {
    static AXE: ItemSortChoice;
    static BLOCK: ItemSortChoice;
    static BOW: ItemSortChoice;
    static CROSSBOW: ItemSortChoice;
    static Companion: Tagged$Companion;
    static FOOD: ItemSortChoice;
    static GAPPLE: ItemSortChoice;
    static HOE: ItemSortChoice;
    static IGNORE: ItemSortChoice;
    static LAVA: ItemSortChoice;
    static MACE: ItemSortChoice;
    static MILK: ItemSortChoice;
    static NONE: ItemSortChoice;
    static PEARL: ItemSortChoice;
    static PICKAXE: ItemSortChoice;
    static POTION: ItemSortChoice;
    static ROD: ItemSortChoice;
    static SHIELD: ItemSortChoice;
    static SHOVEL: ItemSortChoice;
    static SPEAR: ItemSortChoice;
    static SWORD: ItemSortChoice;
    static THROWABLES: ItemSortChoice;
    static WATER: ItemSortChoice;
    static WEAPON: ItemSortChoice;
    static getEntries(): ItemSortChoice[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemSortChoice;
    static values(): (Object | null)[];
    private constructor(tag: string, category: ItemCategory, satisfactionCheck: ((param0: ItemStack) => boolean) | null)
    readonly category: ItemCategory;
    /**
     * This is the function that is used for the greedy check.
     *
     * IF IT WAS IMPLEMENTED
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategorization.kt#L141 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategorization.kt:141}
     */
    readonly satisfactionCheck: ((param0: ItemStack) => boolean) | null;
    readonly tag: string;
    name(): "SWORD" | "WEAPON" | "SPEAR" | "MACE" | "BOW" | "CROSSBOW" | "AXE" | "PICKAXE" | "SHOVEL" | "HOE" | "ROD" | "SHIELD" | "WATER" | "LAVA" | "MILK" | "PEARL" | "GAPPLE" | "FOOD" | "POTION" | "BLOCK" | "THROWABLES" | "IGNORE" | "NONE";
}