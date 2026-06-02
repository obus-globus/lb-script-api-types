import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../../net/minecraft/data/PackOutput.d.ts'
import type { LootTableProvider } from '../../../../../net/minecraft/data/loot/LootTableProvider.d.ts'
export class VanillaLootTableProvider extends Object {
    static create(paramoutput: PackOutput, paramregistries: CompletableFuture<HolderLookup$Provider>): LootTableProvider;
    constructor()
}