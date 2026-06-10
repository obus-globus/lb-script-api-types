import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientRecipeBook } from '../../../../net/minecraft/client/ClientRecipeBook.d.ts'
import type { RecipeCollection } from '../../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection.d.ts'
import type { SessionSearchTrees$Key } from '../../../../net/minecraft/client/multiplayer/SessionSearchTrees$Key.d.ts'
import type { SearchTree } from '../../../../net/minecraft/client/searchtree/SearchTree.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class SessionSearchTrees extends Object {
    constructor()
    // private creativeByNameSearch: CompletableFuture<(param0: string) => ItemStack[]>;
    // private creativeByTagSearch: CompletableFuture<(param0: string) => ItemStack[]>;
    // private recipeSearch: CompletableFuture<(param0: string) => RecipeCollection[]>;
    // private reloaders: Map<SessionSearchTrees$Key, () => void>;
    creativeNameSearch(): (param0: string) => ItemStack[];
    creativeTagSearch(): (param0: string) => ItemStack[];
    rebuildAfterLanguageChange(): void;
    recipes(): (param0: string) => RecipeCollection[];
    // private register(location: SessionSearchTrees$Key, updater: () => void): void;
    updateCreativeTags(items: ItemStack[]): void;
    updateCreativeTooltips(registries: HolderLookup$Provider, itemStacks: ItemStack[]): void;
    updateRecipes(recipeBook: ClientRecipeBook, level: Level): void;
}