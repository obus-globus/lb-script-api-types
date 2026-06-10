import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SortableNode } from '../../../../../net/fabricmc/fabric/impl/base/toposort/SortableNode.d.ts'
import type { ResourceReloaderPhaseData$VanillaStatus } from '../../../../../net/fabricmc/fabric/impl/resource/ResourceReloaderPhaseData$VanillaStatus.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export class ResourceReloaderPhaseData extends SortableNode<ResourceReloaderPhaseData> {
    static link(paramarg0: Object | null, paramarg1: Object | null): void;
    constructor(arg0: Identifier, arg1: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>)
    // private id: Identifier;
    // private resourceReloader: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>;
    // private vanillaStatus: ResourceReloaderPhaseData$VanillaStatus;
    addPreviousNode(arg0: ResourceReloaderPhaseData): void;
    addSubsequentNode(arg0: ResourceReloaderPhaseData): void;
    getDescription(): string;
    markAfter(): void;
    markBefore(): void;
    setVanillaStatus(arg0: ResourceReloaderPhaseData$VanillaStatus): void;
}