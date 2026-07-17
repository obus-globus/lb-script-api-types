import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BiomeModificationMarker } from '../../../net/fabricmc/fabric/impl/biome/modification/BiomeModificationMarker.d.ts'
import type { DimensionModificationMarker } from '../../../net/fabricmc/fabric/impl/dimension/DimensionModificationMarker.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { RegistryAccess$RegistryEntry } from '../../../net/minecraft/core/RegistryAccess$RegistryEntry.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class RegistryAccess$ImmutableRegistryAccess extends Object implements BiomeModificationMarker, DimensionModificationMarker, RegistryAccess {
    static EMPTY: RegistryAccess$Frozen;
    static LOGGER: Logger;
    constructor(entries: Stream<RegistryAccess$RegistryEntry<Object>>)
    constructor(registries: (Object | null)[][])
    constructor(registries: Map<ResourceKey<(Object | null)[]>, (Object | null)[]>)
    // private dimensionsModified: boolean;
    // private modified: boolean;
    // private registries: Map<ResourceKey<(Object | null)[]>, (Object | null)[]>;
    fabric_markDimensionsModified(): void;
    fabric_markModified(): void;
    freeze(): RegistryAccess$Frozen;
    listRegistryKeys(): Stream<ResourceKey<(Object | null)[]>>;
    lookup<E extends unknown>(registryKey: ResourceKey<E[]>): Optional<E[]>;
    lookupOrThrow<E extends unknown>(name: ResourceKey<E[]>): E[];
    registries(): Stream<RegistryAccess$RegistryEntry<Object>>;
}