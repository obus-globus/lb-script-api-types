import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceProvider } from '../../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class ResourceManager$Empty extends Enum<ResourceManager$Empty> implements ResourceManager {
    static EMPTY: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>;
    static INSTANCE: ResourceManager$Empty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ResourceManager$Empty;
    static values(): (Object | null)[];
    private constructor()
    getNamespaces(): string[];
    getResource(location: Identifier): Optional<Resource>;
    getResourceStack(location: Identifier): Resource[];
    listPacks(): Stream<PackResources>;
    listResourceStacks(directory: string, filter: (param0: Identifier) => kotlin.Boolean): Map<Identifier, Resource[]>;
    listResources(directory: string, filter: (param0: Identifier) => kotlin.Boolean): Map<Identifier, Resource>;
    name(): "INSTANCE";
}