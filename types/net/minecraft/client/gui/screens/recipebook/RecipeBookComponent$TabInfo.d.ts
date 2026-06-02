import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SearchRecipeBookCategory } from '../../../../../../net/minecraft/client/gui/screens/recipebook/SearchRecipeBookCategory.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ExtendedRecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/ExtendedRecipeBookCategory.d.ts'
import type { RecipeBookCategory } from '../../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
export class RecipeBookComponent$TabInfo extends Record {
    constructor(category: SearchRecipeBookCategory)
    constructor(primaryIcon: Item, secondaryIcon: Item, category: RecipeBookCategory)
    constructor(icon: Item, category: RecipeBookCategory)
    constructor(primaryIcon: ItemStack, secondaryIcon: Optional<ItemStack>, category: ExtendedRecipeBookCategory)
    // private category: ExtendedRecipeBookCategory;
    // private primaryIcon: ItemStack;
    // private secondaryIcon: Optional<ItemStack>;
    category(): ExtendedRecipeBookCategory;
    equals(o: Object | null): boolean;
    hashCode(): number;
    primaryIcon(): ItemStack;
    secondaryIcon(): Optional<ItemStack>;
    toString(): string;
}