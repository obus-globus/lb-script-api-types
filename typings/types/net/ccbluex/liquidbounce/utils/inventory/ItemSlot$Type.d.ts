import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ItemSlot$Type extends Enum<ItemSlot$Type> {
    static ARMOR: ItemSlot$Type;
    /**
     * e.g. chests
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:88}
     */
    static CONTAINER: ItemSlot$Type;
    static HOTBAR: ItemSlot$Type;
    static INVENTORY: ItemSlot$Type;
    static OFFHAND: ItemSlot$Type;
    static getEntries(): ItemSlot$Type[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemSlot$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "HOTBAR" | "OFFHAND" | "ARMOR" | "INVENTORY" | "CONTAINER";
}