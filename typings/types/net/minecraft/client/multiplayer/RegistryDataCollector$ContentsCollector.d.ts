import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryDataCollectorContentsCollectorAccessor } from '../../../../net/fabricmc/fabric/mixin/registry/sync/client/RegistryDataCollectorContentsCollectorAccessor.d.ts'
import type { RegistrySynchronization$PackedRegistryEntry } from '../../../../net/minecraft/core/RegistrySynchronization$PackedRegistryEntry.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryDataCollector$ContentsCollector extends Object implements RegistryDataCollectorContentsCollectorAccessor {
    private constructor()
    readonly elements: JavaMap<ResourceKey<(Object | null)[]>, RegistrySynchronization$PackedRegistryEntry[]>;
    append(registry: ResourceKey<(Object | null)[]>, elementData: RegistrySynchronization$PackedRegistryEntry[]): void;
}