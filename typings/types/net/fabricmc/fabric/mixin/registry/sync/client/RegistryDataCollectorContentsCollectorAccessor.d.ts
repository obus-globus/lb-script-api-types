import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistrySynchronization$PackedRegistryEntry } from '../../../../../../../net/minecraft/core/RegistrySynchronization$PackedRegistryEntry.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryDataCollectorContentsCollectorAccessor extends Object{
    getElements(): JavaMap<ResourceKey<(Object | null)[]>, RegistrySynchronization$PackedRegistryEntry[]>;
}