import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistrySetBuilder } from '../../../../net/minecraft/core/RegistrySetBuilder.d.ts'
import type { RegistrySetBuilder$PatchedRegistries } from '../../../../net/minecraft/core/RegistrySetBuilder$PatchedRegistries.d.ts'
export class RegistryPatchGenerator extends Object {
    static createLookup(paramvanilla: CompletableFuture<HolderLookup$Provider>, parampackBuilder: RegistrySetBuilder): CompletableFuture<RegistrySetBuilder$PatchedRegistries>;
    constructor()
}