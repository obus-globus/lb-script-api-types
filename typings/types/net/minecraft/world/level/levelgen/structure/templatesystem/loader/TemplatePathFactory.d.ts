import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FileToIdConverter } from '../../../../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackType } from '../../../../../../../../net/minecraft/server/packs/PackType.d.ts'
export class TemplatePathFactory extends Object {
    constructor(sourceDir: Path[])
    constructor(sourceDir: Path[], packType: PackType)
    // private sourceDir: Path[];
    createAndValidatePathToStructure(resourceLocation: Identifier): Path[];
    createAndValidatePathToStructure(id: Identifier, converter: FileToIdConverter): Path[];
}