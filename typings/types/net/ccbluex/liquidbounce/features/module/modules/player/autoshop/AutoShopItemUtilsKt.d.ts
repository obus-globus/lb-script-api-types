import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ContainerScreen } from '../../../../../../../../net/minecraft/client/gui/screens/inventory/ContainerScreen.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class AutoShopItemUtilsKt extends Object {
    static CONCRETE_ID: string;
    static EXPERIENCE_ID: string;
    /**
     * The items usually used to buy other items in BedWars.
     *
     * A server will take them from the player if the latter wants to buy something.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopItemUtils.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopItemUtils.kt:41}
     */
    static LIMITED_ITEMS: string[];
    static POTION_PREFIX: string;
    static STAINED_GLASS_ID: string;
    static TERRACOTTA_ID: string;
    static TIER_ID: string;
    static WOOL_ID: string;
    static isArmorItem(string: string): boolean;
    static isConcrete(item: Item): boolean;
    static isStainedGlass(item: Item): boolean;
    static stacks(containerScreen: ContainerScreen): string[];
}