import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistrySynchronization$PackedRegistryEntry } from '../../../../../../../net/minecraft/core/RegistrySynchronization$PackedRegistryEntry.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryDataCollectorContentsCollectorAccessor extends Object{
    getElements(): Map<ResourceKey<(Object | null)[]>, RegistrySynchronization$PackedRegistryEntry[]>;
}