import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ForbiddenSymlinkInfo } from '../../../../../net/minecraft/world/level/validation/ForbiddenSymlinkInfo.d.ts'
export class DirectoryValidator extends Object {
    constructor(symlinkTargetAllowList: (param0: Path[][]) => boolean)
    // private symlinkTargetAllowList: (param0: Path[][]) => boolean;
    validateDirectory(directory: Path[], allowTopSymlink: boolean): ForbiddenSymlinkInfo[];
    validateKnownDirectory(directory: Path[], issues: ForbiddenSymlinkInfo[]): void;
    validateSymlink(path: Path[]): ForbiddenSymlinkInfo[];
    validateSymlink(path: Path[], issues: ForbiddenSymlinkInfo[]): void;
}