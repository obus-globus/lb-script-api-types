import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShaderpackDirectoryManager extends Object {
    constructor(arg0: Path)
    // private root: Path;
    copyPackIntoDirectory(arg0: string, arg1: Path): void;
    enumerate(): string[];
    getDirectoryUri(): URI;
}