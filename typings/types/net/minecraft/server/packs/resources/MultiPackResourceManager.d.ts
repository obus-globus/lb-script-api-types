import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricMultiPackResourceManager } from '../../../../../net/fabricmc/fabric/impl/resource/FabricMultiPackResourceManager.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { CloseableResourceManager } from '../../../../../net/minecraft/server/packs/resources/CloseableResourceManager.d.ts'
import type { FallbackResourceManager } from '../../../../../net/minecraft/server/packs/resources/FallbackResourceManager.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceFilterSection } from '../../../../../net/minecraft/server/packs/resources/ResourceFilterSection.d.ts'
import type { ResourceProvider } from '../../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class MultiPackResourceManager extends Object implements FabricMultiPackResourceManager, CloseableResourceManager {
    static EMPTY: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>;
    constructor(type: PackType, packs: PackResources[])
    // private namespacedManagers: { [key: string]: FallbackResourceManager };
    // private packType: PackType;
    // private packs: PackResources[];
    close(): void;
    fabric$getPackType(): PackType;
    getNamespaces(): string[];
    // private getPackFilterSection(pack: PackResources): ResourceFilterSection;
    getResource(location: Identifier): Optional<Resource>;
    getResourceStack(location: Identifier): Resource[];
    listPacks(): Stream<PackResources>;
    listResourceStacks(directory: string, filter: (param0: Identifier) => kotlin.Boolean): Map<Identifier, Resource[]>;
    listResources(directory: string, filter: (param0: Identifier) => kotlin.Boolean): Map<Identifier, Resource>;
}