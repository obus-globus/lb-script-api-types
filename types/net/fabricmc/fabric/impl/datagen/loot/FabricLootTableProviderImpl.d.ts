import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricLootTableSubProvider } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricLootTableSubProvider.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
export class FabricLootTableProviderImpl extends Object {
    static run(paramarg0: CachedOutput, paramarg1: FabricLootTableSubProvider, paramarg2: ContextKeySet, paramarg3: FabricPackOutput, paramarg4: CompletableFuture<HolderLookup$Provider>): CompletableFuture<Object>;
    private constructor()
}