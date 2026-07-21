import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { HotbarItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot$Companion.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class HotbarItemSlot extends Enum<HotbarItemSlot> implements ItemSlot {
    static Companion: HotbarItemSlot$Companion;
    static OFFHAND: HotbarItemSlot;
    static PREFER_FEWER_ITEM: (param0: Object, param1: Object) => number;
    static PREFER_MORE_ITEM: (param0: Object, param1: Object) => number;
    /**
     * Distance order:
     * current hand -> offhand -> other slots
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L253 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:253}
     */
    static PREFER_NEARBY: (param0: HotbarItemSlot, param1: HotbarItemSlot) => number;
    static SLOT_0: HotbarItemSlot;
    static SLOT_1: HotbarItemSlot;
    static SLOT_2: HotbarItemSlot;
    static SLOT_3: HotbarItemSlot;
    static SLOT_4: HotbarItemSlot;
    static SLOT_5: HotbarItemSlot;
    static SLOT_6: HotbarItemSlot;
    static SLOT_7: HotbarItemSlot;
    static SLOT_8: HotbarItemSlot;
    static getEntries(): HotbarItemSlot[];
    /**
     * Entries corresponding to vanilla selectable hotbar slots `0..8`, excluding offhand.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L240 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:240}
     */
    static getMainHandSlots(): HotbarItemSlot[];
    static of(hotbarIndex: number): HotbarItemSlot;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): HotbarItemSlot;
    static values(): HotbarItemSlot[];
    private constructor(hotbarIndex: number | null)
    readonly canBeSwapTarget: boolean;
    /**
     * Vanilla hotbar selection index, i.e. {@link Inventory.selected} / {@link Inventory.getSelectedSlot}.
     *
     * Main-hand hotbar entries use `0..8`. Offhand has no such selected index in vanilla,
     * so {@link OFFHAND} uses `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L171 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:171}
     */
    readonly hotbarIndex: number | null;
    /**
     * Vanilla player-inventory index used by {@link Inventory.getItem}.
     *
     * Main-hand hotbar stays `0..8`, while offhand maps to {@link Inventory.SLOT_OFFHAND} (`40`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L189 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:189}
     */
    readonly inventorySlot: number;
    /**
     * Whether this entry represents vanilla offhand instead of one of the nine selectable hotbar slots.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L198 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:198}
     */
    /*not mapped: */ isOffHand(): boolean;
    /**
     * If the player is holding this slot (main hand stack, or offhand stack)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L223 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:223}
     */
    /*not mapped: */ isSelected(): boolean;
    readonly itemStack: ItemStack;
    // private /*not mapped: */ getPlayerInventoryMenuSlot(): number;
    readonly slotType: ItemSlot$Type;
    /**
     * Vanilla {@link InteractionHand} corresponding to this slot when performing item use / interaction logic.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L207 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:207}
     */
    readonly useHand: InteractionHand;
    equals(other: Object | null): boolean;
    getIdForServer(screen: AbstractContainerScreen<any> | null): number | null;
    getIdForServerWithCurrentScreen(): number | null;
    hashCode(): number;
    name(): "OFFHAND" | "SLOT_0" | "SLOT_1" | "SLOT_2" | "SLOT_3" | "SLOT_4" | "SLOT_5" | "SLOT_6" | "SLOT_7" | "SLOT_8";
}