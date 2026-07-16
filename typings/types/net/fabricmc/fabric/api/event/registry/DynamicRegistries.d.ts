import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DynamicRegistries$SyncOption } from '../../../../../../net/fabricmc/fabric/api/event/registry/DynamicRegistries$SyncOption.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DynamicRegistries extends Object {
    static getBootstrappingRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static getDynamicRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static getWorldRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static register<T extends unknown>(paramarg0: ResourceKey<T[]>, paramarg1: Codec<T>): void;
    static registerSynced<T extends unknown>(paramarg0: ResourceKey<T[]>, paramarg1: Codec<T>, paramarg2: Codec<T>, ...paramarg3: DynamicRegistries$SyncOption[]): void;
    static registerSynced<T extends unknown>(paramarg0: ResourceKey<T[]>, paramarg1: Codec<T>, ...paramarg2: DynamicRegistries$SyncOption[]): void;
    private constructor()
}