import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class ShapelessMatch extends Object {
    static isMatch(paramarg0: ItemStack[], paramarg1: Ingredient[]): boolean;
    private constructor(arg0: number)
    // private bitSet: BitSet;
    // private match: number[];
    // private augment(arg0: number): boolean;
}