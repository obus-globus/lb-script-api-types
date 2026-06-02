import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientItemInfoLoader$LoadedClientInfos } from '../../../../../net/minecraft/client/resources/model/ClientItemInfoLoader$LoadedClientInfos.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class ClientItemInfoLoader extends Object {
    static scheduleLoad(parammanager: ResourceManager, paramexecutor: Executor): CompletableFuture<ClientItemInfoLoader$LoadedClientInfos>;
    constructor()
}