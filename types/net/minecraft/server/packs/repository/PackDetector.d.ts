import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DirectoryValidator } from '../../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
import type { ForbiddenSymlinkInfo } from '../../../../../net/minecraft/world/level/validation/ForbiddenSymlinkInfo.d.ts'
export abstract class PackDetector<T extends Object | number | string | boolean> extends Object {
    constructor(validator: DirectoryValidator)
    // private validator: DirectoryValidator;
    createDirectoryPack(content: Path[]): T;
    createZipPack(content: Path[]): T;
    detectPackResources(content: Path[], issues: ForbiddenSymlinkInfo[]): T;
}