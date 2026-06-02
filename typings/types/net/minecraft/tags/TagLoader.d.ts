import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { TagEntry$Lookup } from '../../../net/minecraft/tags/TagEntry$Lookup.d.ts'
import type { TagLoader$ElementLookup } from '../../../net/minecraft/tags/TagLoader$ElementLookup.d.ts'
import type { TagLoader$EntryWithSource } from '../../../net/minecraft/tags/TagLoader$EntryWithSource.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class TagLoader<T extends Object | number | string | boolean> extends Object {
    static buildUpdatedLookups(paramregistries: RegistryAccess$Frozen, paramtags: (Object | null)[]): (Object | null)[];
    static loadTagsForExistingRegistries(parammanager: ResourceManager, paramlayer: RegistryAccess): (Object | null)[];
    static loadTagsForRegistry(parammanager: ResourceManager, paramregistryKey: ResourceKey<Object>, paramlookup: TagLoader$ElementLookup<Object>): Map<Object | null, Object | null>;
    static loadTagsForRegistry(parammanager: ResourceManager, paramregistry: (Object | null)[]): void;
    static loadTagsFromNetwork(paramtags: TagNetworkSerialization$NetworkPayload, paramregistry: (Object | null)[]): Map<Object | null, Object | null>;
    constructor(elementLookup: TagLoader$ElementLookup<T>, directory: string)
    // private directory: string;
    // private elementLookup: TagLoader$ElementLookup<T>;
    build(builders: Map<Identifier, TagLoader$EntryWithSource[]>): Map<Identifier, T[]>;
    load(resourceManager: ResourceManager): Map<Identifier, TagLoader$EntryWithSource[]>;
    // private tryBuildTag(lookup: TagEntry$Lookup<T>, entries: TagLoader$EntryWithSource[]): Either<TagLoader$EntryWithSource[], T[]>;
}