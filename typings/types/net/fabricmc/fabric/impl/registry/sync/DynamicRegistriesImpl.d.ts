import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DynamicRegistries$SyncOption } from '../../../../../../net/fabricmc/fabric/api/event/registry/DynamicRegistries$SyncOption.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DynamicRegistriesImpl extends Object {
    static FABRIC_DYNAMIC_REGISTRY_KEYS: ResourceKey<Object[]>[];
    static SKIP_EMPTY_SYNC_REGISTRIES: ResourceKey<Object[]>[];
    static addSyncedRegistry(paramarg0: ResourceKey<(Object | null)[]>, paramarg1: Codec<Object>, ...paramarg2: DynamicRegistries$SyncOption[]): void;
    static getBootstrappingRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static getWorldRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static register(paramarg0: ResourceKey<(Object | null)[]>, paramarg1: Codec<Object>): RegistryDataLoader$RegistryData<Object>;
    private constructor()
}