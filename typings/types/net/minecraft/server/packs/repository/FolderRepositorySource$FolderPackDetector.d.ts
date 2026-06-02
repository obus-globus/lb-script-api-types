import type { Pack$ResourcesSupplier } from '../../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
import type { PackDetector } from '../../../../../net/minecraft/server/packs/repository/PackDetector.d.ts'
import type { DirectoryValidator } from '../../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
export class FolderRepositorySource$FolderPackDetector extends PackDetector<Pack$ResourcesSupplier> {
    constructor(validator: DirectoryValidator)
    createDirectoryPack(content: Path[]): Pack$ResourcesSupplier;
    createZipPack(content: Path[]): Pack$ResourcesSupplier;
}