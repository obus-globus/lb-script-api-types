import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleItemTags$MergeMode extends Enum<ModuleItemTags$MergeMode> implements Tagged {
    /**
     * {@link ItemStack}s with same {@link Item} and same {@link net.minecraft.core.component.DataComponentPatch} will be merged.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt:132}
     */
    static BY_COMPONENTS: ModuleItemTags$MergeMode;
    /**
     * {@link ItemStack}s with same {@link Item} will be merged.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt:112}
     */
    static BY_ITEM: ModuleItemTags$MergeMode;
    static Companion: Tagged$Companion;
    /**
     * Nothing will be merged.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleItemTags.kt:104}
     */
    static NONE: ModuleItemTags$MergeMode;
    static getEntries(): ModuleItemTags$MergeMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleItemTags$MergeMode;
    static values(): (Object | null)[];
    private constructor(tag: string, merge: (param0: ItemStack[]) => ItemStack[])
    readonly merge: (param0: ItemStack[]) => ItemStack[];
    readonly tag: string;
    name(): "NONE" | "BY_ITEM" | "BY_COMPONENTS";
}