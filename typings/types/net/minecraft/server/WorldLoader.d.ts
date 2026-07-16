import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerResources } from '../../../net/minecraft/server/ReloadableServerResources.d.ts'
import type { WorldLoader$DataLoadContext } from '../../../net/minecraft/server/WorldLoader$DataLoadContext.d.ts'
import type { WorldLoader$DataLoadOutput } from '../../../net/minecraft/server/WorldLoader$DataLoadOutput.d.ts'
import type { WorldLoader$InitConfig } from '../../../net/minecraft/server/WorldLoader$InitConfig.d.ts'
import type { WorldLoader$ResultFactory } from '../../../net/minecraft/server/WorldLoader$ResultFactory.d.ts'
import type { WorldLoader$WorldDataSupplier } from '../../../net/minecraft/server/WorldLoader$WorldDataSupplier.d.ts'
import type { CloseableResourceManager } from '../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
export class WorldLoader extends Object {
    static load<D extends unknown, R extends unknown>(paramconfig: WorldLoader$InitConfig, paramworldDataSupplier: (param0: WorldLoader$DataLoadContext) => WorldLoader$DataLoadOutput<D>, paramresultFactory: (param0: CloseableResourceManager, param1: ReloadableServerResources, param2: LayeredRegistryAccess<RegistryLayer>, param3: D) => R, parambackgroundExecutor: Executor, parammainThreadExecutor: Executor): CompletableFuture<R>;
    constructor()
}