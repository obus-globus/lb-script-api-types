import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Content } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
export class DirectoryContent extends Content {
    constructor(arg0: Path)
    // private dir: Path;
    contains(arg0: string): boolean;
    get(arg0: string): number[];
    getFilesDeep(arg0: string, arg1: string): string[];
    getFilesShallow(arg0: string, arg1: string): string[];
    put(arg0: string, arg1: number[]): boolean;
    // private resolvePath(arg0: Path, arg1: Path): Path;
}