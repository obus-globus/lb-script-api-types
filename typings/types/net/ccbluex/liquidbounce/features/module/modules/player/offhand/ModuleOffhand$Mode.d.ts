import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleOffhand$Mode extends Enum<ModuleOffhand$Mode> {
    static BACK: ModuleOffhand$Mode;
    static BLOCK: ModuleOffhand$Mode;
    static CRYSTAL: ModuleOffhand$Mode;
    static GAPPLE: ModuleOffhand$Mode;
    static NONE: ModuleOffhand$Mode;
    static STRENGTH: ModuleOffhand$Mode;
    static TOTEM: ModuleOffhand$Mode;
    static getEntries(): ModuleOffhand$Mode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleOffhand$Mode;
    static values(): ModuleOffhand$Mode[];
    private constructor(modeName: string, item: ((param0: ItemStack) => boolean) | null, fallBackItem: ((param0: ItemStack) => boolean) | null)
    private constructor(modeName: string, item: Item, fallBackItem: Item | null)
    // private fallBackItem: ((param0: ItemStack) => boolean) | null;
    // private item: ((param0: ItemStack) => boolean) | null;
    // private modeBeforeDirectSwitch: ModuleOffhand$Mode | null;
    readonly modeName: string;
    canCycleTo(): boolean;
    getDelay(): number;
    /**
     * 0 = Main inventory
     * 1 = Hotbar
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt#L336 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt:336}
     */
    getPrioritizedInventoryPart(): number;
    getSlot(): ItemSlot | null;
    onBindPress(): void;
    shouldEquip(): boolean;
    name(): "TOTEM" | "STRENGTH" | "GAPPLE" | "CRYSTAL" | "BLOCK" | "BACK" | "NONE";
}