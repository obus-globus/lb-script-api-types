import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryDataCollector$ContentsCollector } from '../../../../net/minecraft/client/multiplayer/RegistryDataCollector$ContentsCollector.d.ts'
import type { RegistryDataCollector$TagCollector } from '../../../../net/minecraft/client/multiplayer/RegistryDataCollector$TagCollector.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { RegistryAccess$Frozen } from '../../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { RegistrySynchronization$PackedRegistryEntry } from '../../../../net/minecraft/core/RegistrySynchronization$PackedRegistryEntry.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceProvider } from '../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class RegistryDataCollector extends Object {
    constructor()
    // private contentsCollector: RegistryDataCollector$ContentsCollector;
    // private tagCollector: RegistryDataCollector$TagCollector;
    appendContents(registry: ResourceKey<(Object | null)[]>, elementData: RegistrySynchronization$PackedRegistryEntry[]): void;
    appendTags(data: Map<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>): void;
    collectGameRegistries(knownDataSource: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>, originalRegistries: RegistryAccess$Frozen, tagsAndComponentsForSynchronizedRegistriesOnly: boolean): RegistryAccess$Frozen;
    // private loadNewElementsAndTags(knownDataSource: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>, contentsCollector: RegistryDataCollector$ContentsCollector, tagsForSynchronizedRegistriesOnly: boolean): RegistryAccess;
}