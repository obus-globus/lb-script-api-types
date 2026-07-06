import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
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
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleOffhand$Mode;
    static values(): (Object | null)[];
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt#L336 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt:336}
     */
    getPrioritizedInventoryPart(): number;
    getSlot(): ItemSlot | null;
    onBindPress(): void;
    shouldEquip(): boolean;
    name(): "TOTEM" | "STRENGTH" | "GAPPLE" | "CRYSTAL" | "BLOCK" | "BACK" | "NONE";
}