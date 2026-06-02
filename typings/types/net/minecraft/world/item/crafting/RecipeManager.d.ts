import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRecipeManager } from '../../../../../net/fabricmc/fabric/api/recipe/v1/FabricRecipeManager.d.ts'
import type { SynchronizedRecipes } from '../../../../../net/fabricmc/fabric/api/recipe/v1/sync/SynchronizedRecipes.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { RecipeManagerAccessor } from '../../../../../net/fabricmc/fabric/mixin/recipe/sync/RecipeManagerAccessor.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeAccess } from '../../../../../net/minecraft/world/item/crafting/RecipeAccess.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
import type { RecipeManager$CachedCheck } from '../../../../../net/minecraft/world/item/crafting/RecipeManager$CachedCheck.d.ts'
import type { RecipeManager$ServerDisplayInfo } from '../../../../../net/minecraft/world/item/crafting/RecipeManager$ServerDisplayInfo.d.ts'
import type { RecipeMap } from '../../../../../net/minecraft/world/item/crafting/RecipeMap.d.ts'
import type { RecipePropertySet } from '../../../../../net/minecraft/world/item/crafting/RecipePropertySet.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { SelectableRecipe$SingleInputSet } from '../../../../../net/minecraft/world/item/crafting/SelectableRecipe$SingleInputSet.d.ts'
import type { StonecutterRecipe } from '../../../../../net/minecraft/world/item/crafting/StonecutterRecipe.d.ts'
import type { RecipeDisplayEntry } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
import type { RecipeDisplayId } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class RecipeManager extends SimplePreparableReloadListener<RecipeMap> implements FabricRecipeManager, FabricResourceReloader, RecipeManagerAccessor, RecipeAccess {
    static createCheck(paramtype: RecipeType<Object>): RecipeManager$CachedCheck<Object, Object>;
    constructor(registries: HolderLookup$Provider)
    // private allDisplays: RecipeManager$ServerDisplayInfo[];
    // private id: Identifier;
    // private propertySets: Map<ResourceKey<RecipePropertySet>, RecipePropertySet>;
    // private recipeToDisplay: Map<ResourceKey<Recipe<Object>>, RecipeManager$ServerDisplayInfo[]>;
    readonly recipes: RecipeMap;
    // private registries: HolderLookup$Provider;
    // private stonecutterRecipes: SelectableRecipe$SingleInputSet<StonecutterRecipe>;
    readonly synchronizedRecipes: SynchronizedRecipes;
    apply(recipes: RecipeMap, manager: ResourceManager, profiler: ProfilerFiller): void;
    byKey(recipeId: ResourceKey<Recipe<Object>>): Optional<RecipeHolder<Object>>;
    // private byKeyTyped(type: RecipeType<T>, recipeId: ResourceKey<Recipe<Object>>): RecipeHolder<T>;
    fabric$getId(): Identifier;
    finalizeRecipeLoading(enabledFlags: FeatureFlagSet): void;
    getAllMatches<I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level): Stream<RecipeHolder<T>>;
    getAllMatches(arg0: RecipeType<Recipe<Object>>, arg1: RecipeInput, arg2: Level): Stream<Object>;
    getAllOfType(arg0: RecipeType<T>): E[];
    getAllOfType(arg0: RecipeType<Recipe<Object>>): E[];
    getName(): string;
    getRecipeFor<I extends RecipeInput>(type: RecipeType<T>, input: I, level: Level): Optional<RecipeHolder<T>>;
    getRecipeFor<I extends RecipeInput>(type: RecipeType<T>, input: I, level: Level, recipeHint: ResourceKey<Recipe<Object>>): Optional<RecipeHolder<T>>;
    getRecipeFor<I extends RecipeInput>(type: RecipeType<T>, input: I, level: Level, recipeHint: RecipeHolder<T>): Optional<RecipeHolder<T>>;
    getRecipeFromDisplay(id: RecipeDisplayId): RecipeManager$ServerDisplayInfo;
    getRecipes(): E[];
    getSynchronizedItemProperties(): Map<ResourceKey<RecipePropertySet>, RecipePropertySet>;
    getSynchronizedRecipes(): SynchronizedRecipes;
    getSynchronizedStonecutterRecipes(): SelectableRecipe$SingleInputSet<StonecutterRecipe>;
    listDisplaysForRecipe(id: ResourceKey<Recipe<Object>>, output: (param0: RecipeDisplayEntry) => void): void;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): RecipeMap;
    propertySet(id: ResourceKey<RecipePropertySet>): RecipePropertySet;
    stonecutterRecipes(): SelectableRecipe$SingleInputSet<StonecutterRecipe>;
}