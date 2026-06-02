import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryOps$RegistryInfo } from '../../../net/minecraft/resources/RegistryOps$RegistryInfo.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryOps$RegistryInfoLookup extends Object{
    lookup(registryKey: ResourceKey<T[]>): Optional<RegistryOps$RegistryInfo<T>>;
}