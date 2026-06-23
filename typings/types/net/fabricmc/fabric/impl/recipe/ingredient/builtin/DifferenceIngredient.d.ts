import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredient } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredient.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { SlotDisplay } from '../../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export class DifferenceIngredient extends Object implements CustomIngredient {
    static SERIALIZER: CustomIngredientSerializer<DifferenceIngredient>;
    constructor(arg0: Ingredient, arg1: Ingredient)
    // private base: Ingredient;
    // private subtracted: Ingredient;
    display(): SlotDisplay;
    equals(arg0: Object | null): boolean;
    // private getBase(): Ingredient;
    getSerializer(): CustomIngredientSerializer<any>;
    // private getSubtracted(): Ingredient;
    hashCode(): number;
    items(): Stream<Holder<Item>>;
    requiresTesting(): boolean;
    test(arg0: ItemStack): boolean;
    toVanilla(): Ingredient;
}