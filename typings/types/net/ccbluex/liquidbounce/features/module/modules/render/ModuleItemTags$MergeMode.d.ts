import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleItemTags$MergeMode extends Enum<ModuleItemTags$MergeMode> implements Tagged {
    static BY_COMPONENTS: ModuleItemTags$MergeMode;
    static BY_ITEM: ModuleItemTags$MergeMode;
    static Companion: Tagged$Companion;
    static NONE: ModuleItemTags$MergeMode;
    static getEntries(): ModuleItemTags$MergeMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleItemTags$MergeMode;
    static values(): ModuleItemTags$MergeMode[];
    private constructor(tag: string, merge: (param0: ItemStack[]) => ItemStack[])
    readonly merge: (param0: ItemStack[]) => ItemStack[];
    readonly tag: string;
    name(): "NONE" | "BY_ITEM" | "BY_COMPONENTS";
}