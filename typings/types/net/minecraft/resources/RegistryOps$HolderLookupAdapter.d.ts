import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryOps$RegistryInfo } from '../../../net/minecraft/resources/RegistryOps$RegistryInfo.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryOps$HolderLookupAdapter extends Object implements RegistryOps$RegistryInfoLookup {
    constructor(lookupProvider: HolderLookup$Provider)
    // private lookupProvider: HolderLookup$Provider;
    // private lookups: Map<ResourceKey<(Object | null)[]>, Optional<RegistryOps$RegistryInfo<Object>>>;
    // private createLookup(key: ResourceKey<(Object | null)[]>): Optional<RegistryOps$RegistryInfo<Object>>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    lookup<E extends Object | number | string | boolean>(registryKey: ResourceKey<E[]>): Optional<RegistryOps$RegistryInfo<E>>;
}