import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { ForbiddenSymlinkInfo } from '../../../../../net/minecraft/world/level/validation/ForbiddenSymlinkInfo.d.ts'
export class ContentValidationException extends Exception {
    static getMessage(paramdirectory: Path, paramentries: ForbiddenSymlinkInfo[]): string;
    constructor(directory: Path, entries: ForbiddenSymlinkInfo[])
    // private directory: Path;
    // private entries: ForbiddenSymlinkInfo[];
    readonly message: string | null;
}