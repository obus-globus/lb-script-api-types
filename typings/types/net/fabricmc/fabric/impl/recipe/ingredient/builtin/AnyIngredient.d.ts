import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { CombinedIngredient } from '../../../../../../../net/fabricmc/fabric/impl/recipe/ingredient/builtin/CombinedIngredient.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class AnyIngredient extends CombinedIngredient {
    static SERIALIZER: CustomIngredientSerializer<AnyIngredient>;
    constructor(arg0: Ingredient[])
    getSerializer(): CustomIngredientSerializer<any>;
    items(): Stream<Holder<Item>>;
    test(arg0: ItemStack): boolean;
}