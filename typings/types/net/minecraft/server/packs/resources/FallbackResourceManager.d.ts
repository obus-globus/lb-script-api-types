import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { FallbackResourceManager$EntryStack } from '../../../../../net/minecraft/server/packs/resources/FallbackResourceManager$EntryStack.d.ts'
import type { FallbackResourceManager$PackEntry } from '../../../../../net/minecraft/server/packs/resources/FallbackResourceManager$PackEntry.d.ts'
import type { IoSupplier } from '../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceMetadata } from '../../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
import type { ResourceProvider } from '../../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class FallbackResourceManager extends Object implements ResourceManager {
    static EMPTY: (param0: Identifier) => Optional<Resource>;
    constructor(type: PackType, namespace: string)
    // private fallbacks: FallbackResourceManager$PackEntry[];
    // private namespace: string;
    // private type: PackType;
    // private createStackMetadataFinder(location: Identifier, finalPackIndex: number): () => ResourceMetadata;
    getNamespaces(): string[];
    getResource(location: Identifier): Optional<Resource>;
    getResourceStack(location: Identifier): Resource[];
    // private listPackResources(entry: FallbackResourceManager$PackEntry, directory: string, filter: (param0: Identifier) => boolean, foundResources: Map<Identifier, FallbackResourceManager$EntryStack>): void;
    listPacks(): Stream<PackResources>;
    listResourceStacks(directory: string, filter: (param0: Identifier) => boolean): Map<Identifier, Resource[]>;
    listResources(directory: string, filter: (param0: Identifier) => boolean): Map<Identifier, Resource>;
    push(pack: PackResources): void;
    push(pack: PackResources, filter: (param0: Identifier) => boolean): void;
    pushFilterOnly(name: string, filter: (param0: Identifier) => boolean): void;
    // private pushInternal(name: string, pack: PackResources, contentFilter: (param0: Identifier) => boolean): void;
}