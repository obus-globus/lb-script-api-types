import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { CloseableResourceManager } from '../../../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ReloadInstance } from '../../../../../net/minecraft/server/packs/resources/ReloadInstance.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceProvider } from '../../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
export class ReloadableResourceManager extends Object implements AutoCloseable, ResourceManager {
    static EMPTY: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>;
    constructor(type: PackType)
    // private listeners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[];
    // private resources: CloseableResourceManager;
    // private type: PackType;
    close(): void;
    createReload(backgroundExecutor: Executor, mainThreadExecutor: Executor, initialTask: CompletableFuture<Unit>, resourcePacks: PackResources[]): ReloadInstance;
    getNamespaces(): string[];
    getResource(location: Identifier): Optional<Resource>;
    getResourceStack(location: Identifier): Resource[];
    listPacks(): Stream<PackResources>;
    listResourceStacks(directory: string, filter: (param0: Identifier) => kotlin.Boolean): Map<Identifier, Resource[]>;
    listResources(directory: string, filenameFilter: (param0: Identifier) => kotlin.Boolean): Map<Identifier, Resource>;
    registerReloadListener(listener: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>): void;
}