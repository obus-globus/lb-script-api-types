import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredient } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredient.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { SlotDisplay } from '../../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export class CustomDataIngredient extends Object implements CustomIngredient {
    static SERIALIZER: CustomIngredientSerializer<CustomDataIngredient>;
    constructor(arg0: Ingredient, arg1: CompoundTag)
    // private base: Ingredient;
    // private nbt: CompoundTag;
    // private createEntryDisplay(arg0: Holder<Item>): SlotDisplay;
    display(): SlotDisplay;
    equals(arg0: Object | null): boolean;
    // private getBase(): Ingredient;
    // private getNbt(): CompoundTag;
    getSerializer(): CustomIngredientSerializer<Object>;
    hashCode(): number;
    items(): Stream<Holder<Item>>;
    requiresTesting(): boolean;
    test(arg0: ItemStack): boolean;
    toVanilla(): Ingredient;
}