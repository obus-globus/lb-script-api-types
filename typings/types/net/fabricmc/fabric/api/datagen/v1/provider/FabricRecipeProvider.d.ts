import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { RecipeOutput } from '../../../../../../../net/minecraft/data/recipes/RecipeOutput.d.ts'
import type { RecipeProvider } from '../../../../../../../net/minecraft/data/recipes/RecipeProvider.d.ts'
import type { RecipeProvider$Runner } from '../../../../../../../net/minecraft/data/recipes/RecipeProvider$Runner.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricRecipeProvider extends RecipeProvider$Runner {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
    // private output: FabricPackOutput;
    // private registriesFuture: CompletableFuture<HolderLookup$Provider>;
    createRecipeProvider(arg0: HolderLookup$Provider, arg1: RecipeOutput): RecipeProvider;
    getRecipeIdentifier(arg0: Identifier): Identifier;
    run(arg0: CachedOutput): CompletableFuture<Object>;
    withConditions(arg0: RecipeOutput, ...arg1: ResourceCondition[]): RecipeOutput;
}