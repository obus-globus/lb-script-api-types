import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { HotbarItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot$Companion.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Companion.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class HotbarItemSlot extends Enum<HotbarItemSlot> implements ItemSlot {
    static Companion: HotbarItemSlot$Companion;
    static Companion: ItemSlot$Companion;
    static OFFHAND: HotbarItemSlot;
    static PREFER_FEWER_ITEM: (param0: Object | null) => kotlin.Boolean;
    static PREFER_MORE_ITEM: (param0: Object | null) => kotlin.Boolean;
    /**
     * Distance order:
     * current hand -> offhand -> other slots
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L249 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:249}
     */
    static PREFER_NEARBY: (param0: HotbarItemSlot) => kotlin.Boolean;
    static PREFER_NEARBY: (param0: ItemSlot) => kotlin.Boolean;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L237 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:237}
     */
    static getMainHandSlots(): HotbarItemSlot[];
    static of(paramarg0: number): HotbarItemSlot;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HotbarItemSlot;
    static values(): (Object | null)[];
    private constructor(hotbarIndex: number | null)
    readonly canBeSwapTarget: boolean;
    /**
     * Vanilla hotbar selection index, i.e. {@link Inventory.selected} / {@link Inventory.getSelectedSlot}.
     *
     * Main-hand hotbar entries use `0..8`. Offhand has no such selected index in vanilla,
     * so {@link OFFHAND} uses `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L166 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:166}
     */
    readonly hotbarIndex: number | null;
    /**
     * Vanilla player-inventory index used by {@link Inventory.getItem}.
     *
     * Main-hand hotbar stays `0..8`, while offhand maps to {@link Inventory.SLOT_OFFHAND} (`40`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:185}
     */
    readonly inventorySlot: number;
    /**
     * Whether this entry represents vanilla offhand instead of one of the nine selectable hotbar slots.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L196 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:196}
     */
    /*not mapped: */ isOffHand(): boolean;
    /**
     * If the player is holding this slot (main hand stack, or offhand stack)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L221 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:221}
     */
    /*not mapped: */ isSelected(): boolean;
    readonly itemStack: ItemStack;
    // private /*not mapped: */ getPlayerInventoryMenuSlot(): number;
    readonly slotType: ItemSlot$Type;
    /**
     * Vanilla {@link InteractionHand} corresponding to this slot when performing item use / interaction logic.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt#L205 | src/main/kotlin/net/ccbluex/liquidbounce/utils/inventory/ItemSlot.kt:205}
     */
    readonly useHand: InteractionHand;
    getIdForServer(screen: AbstractContainerScreen<Object> | null): number | null;
    getIdForServerWithCurrentScreen(): number | null;
    name(): "OFFHAND" | "SLOT_0" | "SLOT_1" | "SLOT_2" | "SLOT_3" | "SLOT_4" | "SLOT_5" | "SLOT_6" | "SLOT_7" | "SLOT_8";
}