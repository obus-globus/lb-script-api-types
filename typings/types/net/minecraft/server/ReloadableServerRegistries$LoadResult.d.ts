import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
export class ReloadableServerRegistries$LoadResult extends Record {
    constructor(layers: LayeredRegistryAccess<RegistryLayer>, lookupWithUpdatedTags: HolderLookup$Provider)
    // private layers: LayeredRegistryAccess<RegistryLayer>;
    // private lookupWithUpdatedTags: HolderLookup$Provider;
    equals(o: Object | null): boolean;
    hashCode(): number;
    layers(): LayeredRegistryAccess<RegistryLayer>;
    lookupWithUpdatedTags(): HolderLookup$Provider;
    toString(): string;
}