import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { PlacementInfo } from '../../../../../net/minecraft/world/item/crafting/PlacementInfo.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export interface Recipe<T extends RecipeInput> extends Object{
    assemble(input: T): ItemStack;
    display(): RecipeDisplay[];
    getSerializer(): RecipeSerializer<Recipe<T>>;
    getType(): RecipeType<Recipe<T>>;
    group(): string;
    isSpecial(): boolean;
    matches(input: T, level: Level): boolean;
    placementInfo(): PlacementInfo;
    recipeBookCategory(): RecipeBookCategory;
    showNotification(): boolean;
}