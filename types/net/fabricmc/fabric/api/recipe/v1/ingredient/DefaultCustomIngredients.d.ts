import type { UnaryOperator } from '../../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DataComponentPatch } from '../../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentPatch$Builder } from '../../../../../../../net/minecraft/core/component/DataComponentPatch$Builder.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class DefaultCustomIngredients extends Object {
    static all(paramarg0: (Object | null)[]): Ingredient;
    static any(paramarg0: (Object | null)[]): Ingredient;
    static components(paramarg0: ItemStack): Ingredient;
    static components(paramarg0: Ingredient, paramarg1: (param0: DataComponentPatch$Builder) => unknown): Ingredient;
    static components(paramarg0: Ingredient, paramarg1: DataComponentPatch): Ingredient;
    static customData(paramarg0: Ingredient, paramarg1: CompoundTag): Ingredient;
    static difference(paramarg0: Ingredient, paramarg1: Ingredient): Ingredient;
    private constructor()
}