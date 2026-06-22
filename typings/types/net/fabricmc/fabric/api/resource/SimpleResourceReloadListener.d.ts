import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IdentifiableResourceReloadListener } from '../../../../../net/fabricmc/fabric/api/resource/IdentifiableResourceReloadListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export interface SimpleResourceReloadListener<T extends Object | number | string | boolean> extends Object, IdentifiableResourceReloadListener {
    apply(arg0: T, arg1: ResourceManager, arg2: Executor): CompletableFuture<void>;
    getFabricDependencies(): Identifier[];
    getFabricId(): Identifier;
    load(arg0: ResourceManager, arg1: Executor): CompletableFuture<T>;
    reload(arg0: PreparableReloadListener$SharedState, arg1: Executor, arg2: (param0: Object | null) => CompletableFuture<Object>, arg3: Executor): CompletableFuture<void>;
}