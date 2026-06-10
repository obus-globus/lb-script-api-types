import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { Registry$PendingTags } from '../../../net/minecraft/core/Registry$PendingTags.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { TagEntry$Lookup } from '../../../net/minecraft/tags/TagEntry$Lookup.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { TagLoader$ElementLookup } from '../../../net/minecraft/tags/TagLoader$ElementLookup.d.ts'
import type { TagLoader$EntryWithSource } from '../../../net/minecraft/tags/TagLoader$EntryWithSource.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class TagLoader<T extends Object | number | string | boolean> extends Object {
    static buildUpdatedLookups(paramregistries: RegistryAccess$Frozen, paramtags: Registry$PendingTags<Object>[]): HolderLookup$RegistryLookup<Object>[];
    static loadTagsForExistingRegistries(parammanager: ResourceManager, paramlayer: RegistryAccess): Registry$PendingTags<Object>[];
    static loadTagsForRegistry(parammanager: ResourceManager, paramregistryKey: ResourceKey<(Object | null)[]>, paramlookup: TagLoader$ElementLookup<Holder<Object>>): Map<TagKey<Object>, Holder<Object>[]>;
    static loadTagsForRegistry(parammanager: ResourceManager, paramregistry: (Object | null)[]): void;
    static loadTagsFromNetwork(paramtags: TagNetworkSerialization$NetworkPayload, paramregistry: (Object | null)[]): Map<TagKey<Object>, Holder<Object>[]>;
    constructor(elementLookup: TagLoader$ElementLookup<T>, directory: string)
    // private directory: string;
    // private elementLookup: TagLoader$ElementLookup<T>;
    build(builders: Map<Identifier, TagLoader$EntryWithSource[]>): Map<Identifier, T[]>;
    load(resourceManager: ResourceManager): Map<Identifier, TagLoader$EntryWithSource[]>;
    // private tryBuildTag(lookup: TagEntry$Lookup<T>, entries: TagLoader$EntryWithSource[]): Either<TagLoader$EntryWithSource[], T[]>;
}