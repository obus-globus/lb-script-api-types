import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloner$Factory } from '../../../net/minecraft/core/Cloner$Factory.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { RegistrySetBuilder$BuildState } from '../../../net/minecraft/core/RegistrySetBuilder$BuildState.d.ts'
import type { RegistrySetBuilder$PatchedRegistries } from '../../../net/minecraft/core/RegistrySetBuilder$PatchedRegistries.d.ts'
import type { RegistrySetBuilder$RegistryBootstrap } from '../../../net/minecraft/core/RegistrySetBuilder$RegistryBootstrap.d.ts'
import type { RegistrySetBuilder$RegistryContents } from '../../../net/minecraft/core/RegistrySetBuilder$RegistryContents.d.ts'
import type { RegistrySetBuilder$RegistryStub } from '../../../net/minecraft/core/RegistrySetBuilder$RegistryStub.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MutableObject } from '../../../org/apache/commons/lang3/mutable/MutableObject.d.ts'
export class RegistrySetBuilder extends Object {
    constructor()
    entries: RegistrySetBuilder$RegistryStub<Object>[];
    add(key: ResourceKey<T[]>, lifecycle: Lifecycle, bootstrap: (param0: T) => void): RegistrySetBuilder;
    add(key: ResourceKey<T[]>, bootstrap: (param0: T) => void): RegistrySetBuilder;
    build(context: RegistryAccess): HolderLookup$Provider;
    buildPatch(context: RegistryAccess, fallbackProvider: HolderLookup$Provider, clonerFactory: Cloner$Factory): RegistrySetBuilder$PatchedRegistries;
    // private createLazyFullPatchedRegistries(owner: HolderOwner<T>, clonerFactory: Cloner$Factory, registryKey: ResourceKey<T[]>, patchProvider: HolderLookup$Provider, fallbackProvider: HolderLookup$Provider, targetProvider: MutableObject<HolderLookup$Provider>): HolderLookup$RegistryLookup<T>;
    // private createLazyFullPatchedRegistries(context: RegistryAccess, fallbackProvider: HolderLookup$Provider, clonerFactory: Cloner$Factory, newRegistries: Map<ResourceKey<(Object | null)[]>, RegistrySetBuilder$RegistryContents<Object>>, patchOnlyRegistries: HolderLookup$Provider): HolderLookup$Provider;
    // private createState(context: RegistryAccess): RegistrySetBuilder$BuildState;
}