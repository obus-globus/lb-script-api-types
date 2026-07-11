import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DynamicRegistries extends Object {
    static getBootstrappingRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static getDynamicRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static getWorldRegistries(): RegistryDataLoader$RegistryData<Object>[];
    static register(paramarg0: ResourceKey<(Object | null)[]>, paramarg1: Codec<Object>): void;
    static registerSynced(paramarg0: ResourceKey<(Object | null)[]>, paramarg1: Codec<Object>, paramarg2: Codec<Object>, ...paramarg3: (Object | null)[]): void;
    static registerSynced(paramarg0: ResourceKey<(Object | null)[]>, paramarg1: Codec<Object>, ...paramarg2: (Object | null)[]): void;
    private constructor()
}