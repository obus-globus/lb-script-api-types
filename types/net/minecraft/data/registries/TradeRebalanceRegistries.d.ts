import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistrySetBuilder$PatchedRegistries } from '../../../../net/minecraft/core/RegistrySetBuilder$PatchedRegistries.d.ts'
export class TradeRebalanceRegistries extends Object {
    static createLookup(paramvanilla: CompletableFuture<HolderLookup$Provider>): CompletableFuture<RegistrySetBuilder$PatchedRegistries>;
    constructor()
}