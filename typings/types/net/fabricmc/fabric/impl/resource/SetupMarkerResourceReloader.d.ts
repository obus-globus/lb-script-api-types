import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ReloadableServerResources } from '../../../../../net/minecraft/server/ReloadableServerResources.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class SetupMarkerResourceReloader extends Record implements ResourceManagerReloadListener {
    constructor(reloadableServerResources: ReloadableServerResources, registries: HolderLookup$Provider, featureSet: FeatureFlagSet)
    // private featureSet: FeatureFlagSet;
    // private registries: HolderLookup$Provider;
    // private reloadableServerResources: ReloadableServerResources;
    equals(arg0: Object | null): boolean;
    featureSet(): FeatureFlagSet;
    hashCode(): number;
    onResourceManagerReload(arg0: ResourceManager): void;
    prepareSharedState(arg0: PreparableReloadListener$SharedState): void;
    registries(): HolderLookup$Provider;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    reloadableServerResources(): ReloadableServerResources;
    toString(): string;
}