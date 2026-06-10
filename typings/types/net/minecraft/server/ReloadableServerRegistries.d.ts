import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { Registry$PendingTags } from '../../../net/minecraft/core/Registry$PendingTags.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ReloadableServerRegistries$LoadResult } from '../../../net/minecraft/server/ReloadableServerRegistries$LoadResult.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class ReloadableServerRegistries extends Object {
    static reload(paramcontext: LayeredRegistryAccess<RegistryLayer>, paramupdatedContextTags: Registry$PendingTags<Object>[], parammanager: ResourceManager, paramexecutor: Executor): CompletableFuture<ReloadableServerRegistries$LoadResult>;
    constructor()
}