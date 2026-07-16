import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackLocationInfo } from '../../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { Pack$ResourcesSupplier } from '../../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
import type { PackSource } from '../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
import type { RepositorySource } from '../../../../../net/minecraft/server/packs/repository/RepositorySource.d.ts'
import type { DirectoryValidator } from '../../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
export class FolderRepositorySource extends Object implements RepositorySource {
    static discoverPacks(paramfolder: Path, paramvalidator: DirectoryValidator, paramresult: (param0: Path, param1: Pack$ResourcesSupplier) => void): void;
    constructor(folder: Path, packType: PackType, packSource: PackSource, validator: DirectoryValidator)
    // private folder: Path;
    packSource: PackSource;
    // private packType: PackType;
    // private validator: DirectoryValidator;
    // private createDiscoveredFilePackInfo(content: Path): PackLocationInfo;
    loadPacks(result: (param0: Pack) => void): void;
}