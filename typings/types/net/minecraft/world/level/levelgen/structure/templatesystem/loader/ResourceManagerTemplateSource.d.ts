import type { DataFixer } from '../../../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Optional } from '../../../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { HolderGetter } from '../../../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { FileToIdConverter } from '../../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StructureTemplate } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
import type { TemplateSource } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/loader/TemplateSource.d.ts'
export class ResourceManagerTemplateSource extends TemplateSource {
    constructor(fixerUpper: DataFixer, blockLookup: HolderGetter<Block>, resourceManager: ResourceManager, fileToIdConverter: FileToIdConverter)
    // private fileToIdConverter: FileToIdConverter;
    readonly resourceManager: ResourceManager;
    list(): Stream<Identifier>;
    load(id: Identifier): Optional<StructureTemplate>;
    setResourceManager(resourceManager: ResourceManager): void;
}