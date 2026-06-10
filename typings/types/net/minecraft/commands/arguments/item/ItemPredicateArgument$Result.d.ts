import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ItemPredicateArgument$Result extends Predicate<ItemStack>, Object {
    and(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
    negate(): (param0: ItemStack) => boolean;
    or(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
}