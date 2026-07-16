import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../../net/minecraft/data/PackOutput.d.ts'
import type { RecipeOutput } from '../../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeProvider } from '../../../../../net/minecraft/data/recipes/RecipeProvider.d.ts'
import type { RecipeProvider$Runner } from '../../../../../net/minecraft/data/recipes/RecipeProvider$Runner.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class VanillaRecipeProvider$Runner extends RecipeProvider$Runner {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(packOutput: PackOutput, registries: CompletableFuture<HolderLookup$Provider>)
    createRecipeProvider(registries: HolderLookup$Provider, output: RecipeOutput): RecipeProvider;
    getName(): string;
}