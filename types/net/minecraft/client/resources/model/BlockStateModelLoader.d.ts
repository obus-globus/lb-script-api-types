import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModelLoader$LoadedModels } from '../../../../../net/minecraft/client/resources/model/BlockStateModelLoader$LoadedModels.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class BlockStateModelLoader extends Object {
    static loadBlockStates(parammanager: ResourceManager, paramexecutor: Executor): CompletableFuture<BlockStateModelLoader$LoadedModels>;
    constructor()
}