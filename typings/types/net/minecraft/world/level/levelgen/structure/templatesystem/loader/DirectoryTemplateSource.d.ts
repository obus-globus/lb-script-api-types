import type { DataFixer } from '../../../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Throwable } from '../../../../../../../../java/lang/Throwable.d.ts'
import type { HolderGetter } from '../../../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { FileToIdConverter } from '../../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackType } from '../../../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { IoSupplier } from '../../../../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { StructureTemplate } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
import type { TemplateSource } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/loader/TemplateSource.d.ts'
export class DirectoryTemplateSource extends TemplateSource {
    constructor(fixerUpper: DataFixer, blockLookup: HolderGetter<Block>, sourceDir: Path[], fileToIdConverter: FileToIdConverter, loadAsText: boolean)
    constructor(fixerUpper: DataFixer, blockLookup: HolderGetter<Block>, sourceDir: Path[], packType: PackType, fileToIdConverter: FileToIdConverter, loadAsText: boolean)
    // private fileToIdConverter: FileToIdConverter;
    // private loadAsText: boolean;
    // private sourceDir: Path[];
    list(): Stream<Identifier>;
    load(id: Identifier): Optional<StructureTemplate>;
    load(opener: () => InputStream, asText: boolean, onError: (param0: Throwable) => void): Optional<StructureTemplate>;
}