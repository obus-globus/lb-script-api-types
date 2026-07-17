import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Mode } from '../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SingleItemStackPickMode extends Mode implements Predicate<ItemStack> {
    static Companion: Tagged$Companion;
    protected constructor(parent: ModeValueGroup<any>, name: string)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    and(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
    negate(): (param0: ItemStack) => boolean;
    or(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
    test(itemStack: ItemStack): boolean;
}