import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceProvider } from '../../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class ResourceManager$Empty extends Enum<ResourceManager$Empty> implements ResourceManager {
    static EMPTY: (param0: Identifier) => Optional<Resource>;
    static INSTANCE: ResourceManager$Empty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ResourceManager$Empty;
    static values(): ResourceManager$Empty[];
    private constructor()
    getNamespaces(): string[];
    getResource(location: Identifier): Optional<Resource>;
    getResourceOrThrow(location: Identifier): Resource;
    getResourceStack(location: Identifier): Resource[];
    listPacks(): Stream<PackResources>;
    listResourceStacks(directory: string, filter: (param0: Identifier) => boolean): JavaMap<Identifier, Resource[]>;
    listResources(directory: string, filter: (param0: Identifier) => boolean): JavaMap<Identifier, Resource>;
    open(location: Identifier): InputStream;
    openAsReader(location: Identifier): BufferedReader;
    name(): "INSTANCE";
}