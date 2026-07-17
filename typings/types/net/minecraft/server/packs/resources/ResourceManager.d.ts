import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceProvider } from '../../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export interface ResourceManager extends Object, ResourceProvider {
    getNamespaces(): string[];
    getResourceOrThrow(location: Identifier): Resource;
    getResourceStack(location: Identifier): Resource[];
    listPacks(): Stream<PackResources>;
    listResourceStacks(directory: string, filter: (param0: Identifier) => boolean): JavaMap<Identifier, Resource[]>;
    listResources(directory: string, filter: (param0: Identifier) => boolean): JavaMap<Identifier, Resource>;
    open(location: Identifier): InputStream;
    openAsReader(location: Identifier): BufferedReader;
}