import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ResourceLoader } from '../../../../../net/fabricmc/fabric/api/resource/v1/ResourceLoader.d.ts'
import type { PackActivationType } from '../../../../../net/fabricmc/fabric/api/resource/v1/pack/PackActivationType.d.ts'
import type { ResourceLoaderImpl$ReloaderOrder } from '../../../../../net/fabricmc/fabric/impl/resource/ResourceLoaderImpl$ReloaderOrder.d.ts'
import type { SetupMarkerResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/SetupMarkerResourceReloader.d.ts'
import type { ModContainer } from '../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { PreparableReloadListener$StateKey } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$StateKey.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class ResourceLoaderImpl extends Object implements ResourceLoader {
    static DEBUG_PROFILE_RESOURCE_RELOADERS: boolean;
    static FEATURE_FLAG_SET_KEY: PreparableReloadListener$StateKey<FeatureFlagSet>;
    static REGISTRY_LOOKUP_KEY: PreparableReloadListener$StateKey<HolderLookup$Provider>;
    static get(paramarg0: PackType): ResourceLoader;
    static get(paramarg0: PackType): ResourceLoaderImpl;
    static registerBuiltinPack(paramarg0: Identifier, paramarg1: ModContainer, paramarg2: PackActivationType): boolean;
    static registerBuiltinPack(paramarg0: Identifier, paramarg1: ModContainer, paramarg2: Component, paramarg3: PackActivationType): boolean;
    static registerBuiltinPack(paramarg0: Identifier, paramarg1: string, paramarg2: ModContainer, paramarg3: PackActivationType): boolean;
    static registerBuiltinPack(paramarg0: Identifier, paramarg1: string, paramarg2: ModContainer, paramarg3: Component, paramarg4: PackActivationType): boolean;
    static registerBuiltinResourcePacks(paramarg0: PackType, paramarg1: (param0: Pack) => void): void;
    static sort(paramarg0: PackType, paramarg1: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[]): (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[];
    constructor(arg0: PackType)
    // private addedReloaders: Map<Identifier, (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>>;
    // private reloadersOrdering: ResourceLoaderImpl$ReloaderOrder[];
    // private type: PackType;
    addListenerOrdering(arg0: Identifier, arg1: Identifier): void;
    checkUniqueResourceReloader(arg0: Identifier): void;
    collectReloadersToAdd(arg0: SetupMarkerResourceReloader): Map$Entry<Identifier, (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>>[];
    // private extractSetupMarker(arg0: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[]): SetupMarkerResourceReloader;
    // private getResourceReloaderIdForSorting(arg0: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>): Identifier;
    hasResourceReloader(arg0: Identifier): boolean;
    registerReloadListener(arg0: Identifier, arg1: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>): void;
    // private sort(arg0: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[]): void;
}