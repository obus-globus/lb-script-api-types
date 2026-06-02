import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CraftingRecipe } from '../../../../../net/minecraft/world/item/crafting/CraftingRecipe.d.ts'
import type { RecipeCache$Entry } from '../../../../../net/minecraft/world/item/crafting/RecipeCache$Entry.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeManager } from '../../../../../net/minecraft/world/item/crafting/RecipeManager.d.ts'
export class RecipeCache extends Object {
    constructor(capacity: number)
    // private cachedRecipeManager: WeakReference<RecipeManager>;
    // private entries: RecipeCache$Entry[];
    // private compute(input: CraftingInput, level: ServerLevel): Optional<RecipeHolder<CraftingRecipe>>;
    get(level: ServerLevel, input: CraftingInput): Optional<RecipeHolder<CraftingRecipe>>;
    // private insert(input: CraftingInput, recipe: RecipeHolder<CraftingRecipe>): void;
    // private moveEntryToFront(index: number): void;
    // private validateRecipeManager(level: ServerLevel): void;
}