import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { DataResourceLoader } from '../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceLoader.d.ts'
import type { DataResourceStore$Mutable } from '../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Mutable.d.ts'
import type { PackActivationType } from '../../../../../net/fabricmc/fabric/api/resource/v1/pack/PackActivationType.d.ts'
import type { ResourceLoaderImpl } from '../../../../../net/fabricmc/fabric/impl/resource/ResourceLoaderImpl.d.ts'
import type { SetupMarkerResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/SetupMarkerResourceReloader.d.ts'
import type { ModContainer } from '../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerAdvancementManager } from '../../../../../net/minecraft/server/ServerAdvancementManager.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { PreparableReloadListener$StateKey } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$StateKey.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { RecipeManager } from '../../../../../net/minecraft/world/item/crafting/RecipeManager.d.ts'
export class DataResourceLoaderImpl extends ResourceLoaderImpl implements DataResourceLoader {
    static ADVANCEMENT_LOADER_KEY: PreparableReloadListener$StateKey<ServerAdvancementManager>;
    static DATA_RESOURCE_STORE_KEY: PreparableReloadListener$StateKey<DataResourceStore$Mutable>;
    static DEBUG_PROFILE_RESOURCE_RELOADERS: boolean;
    static FEATURE_FLAG_SET_KEY: PreparableReloadListener$StateKey<FeatureFlagSet>;
    static INSTANCE: DataResourceLoaderImpl;
    static RECIPE_MANAGER_KEY: PreparableReloadListener$StateKey<RecipeManager>;
    static REGISTRY_LOOKUP_KEY: PreparableReloadListener$StateKey<HolderLookup$Provider>;
    static get(paramarg0: PackType): ResourceLoaderImpl;
    static registerBuiltinPack(paramarg0: Identifier, paramarg1: string, paramarg2: ModContainer, paramarg3: PackActivationType): boolean;
    static registerBuiltinPack(paramarg0: Identifier, paramarg1: string, paramarg2: ModContainer, paramarg3: Component, paramarg4: PackActivationType): boolean;
    static registerBuiltinResourcePacks(paramarg0: PackType, paramarg1: (param0: Pack) => void): void;
    static sort(paramarg0: PackType, paramarg1: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>[]): (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>[];
    private constructor()
    // private addedReloaderFactories: Map<Identifier, (param0: HolderLookup$Provider) => (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>>;
    collectReloadersToAdd(arg0: SetupMarkerResourceReloader): Map$Entry<Identifier, (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>>[];
    hasResourceReloader(arg0: Identifier): boolean;
    registerReloadListener(arg0: Identifier, arg1: (param0: HolderLookup$Provider) => (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>): void;
    registerReloadListener(arg0: Identifier, arg1: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>): void;
}