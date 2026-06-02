import type { DataFixer } from '../../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { FileToIdConverter } from '../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StructureTemplate } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
import type { ResourceManagerTemplateSource } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/loader/ResourceManagerTemplateSource.d.ts'
import type { TemplatePathFactory } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/loader/TemplatePathFactory.d.ts'
import type { TemplateSource } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/loader/TemplateSource.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class StructureTemplateManager extends Object {
    static RESOURCE_TEXT_STRUCTURE_LISTER: FileToIdConverter;
    static STRUCTURE_DIRECTORY_NAME: string;
    static WORLD_STRUCTURE_LISTER: FileToIdConverter;
    static save(paramfile: Path[][], paramstructureTemplate: StructureTemplate, paramasText: boolean): boolean;
    constructor(resourceManager: ResourceManager, storage: LevelStorageSource$LevelStorageAccess, fixerUpper: DataFixer, blockLookup: HolderGetter<Block>)
    // private resourceManagerSource: ResourceManagerTemplateSource;
    // private sources: TemplateSource[];
    // private structureRepository: Map<Identifier, Optional<StructureTemplate>>;
    // private testTemplates: TemplatePathFactory;
    // private worldTemplates: TemplatePathFactory;
    get(id: Identifier): Optional<StructureTemplate>;
    getOrCreate(id: Identifier): StructureTemplate;
    listTemplates(): Stream<Identifier>;
    onResourceManagerReload(resourceManager: ResourceManager): void;
    remove(id: Identifier): void;
    save(id: Identifier): boolean;
    testTemplates(): TemplatePathFactory;
    // private tryLoad(id: Identifier): Optional<StructureTemplate>;
    worldTemplates(): TemplatePathFactory;
}