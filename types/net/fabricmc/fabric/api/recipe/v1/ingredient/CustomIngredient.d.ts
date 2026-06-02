import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { SlotDisplay } from '../../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export interface CustomIngredient extends Object{
    display(): SlotDisplay;
    getSerializer(): CustomIngredientSerializer<Object>;
    items(): Stream<Holder<Item>>;
    requiresTesting(): boolean;
    test(arg0: ItemStack): boolean;
    toVanilla(): Ingredient;
}