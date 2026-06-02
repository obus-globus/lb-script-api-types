import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class StructurePieceSerializationContext extends Record {
    static fromLevel(paramlevel: ServerLevel): StructurePieceSerializationContext;
    constructor(resourceManager: ResourceManager, registryAccess: RegistryAccess, structureTemplateManager: StructureTemplateManager)
    // private registryAccess: RegistryAccess;
    // private resourceManager: ResourceManager;
    // private structureTemplateManager: StructureTemplateManager;
    equals(o: Object | null): boolean;
    hashCode(): number;
    registryAccess(): RegistryAccess;
    resourceManager(): ResourceManager;
    structureTemplateManager(): StructureTemplateManager;
    toString(): string;
}