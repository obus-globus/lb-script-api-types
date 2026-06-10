import type { PathMatcher } from '../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FileSystemUtil extends Object {
    static isFileStoreExcluded(paramarg0: string, paramarg1: string, paramarg2: (param0: Path[][]) => boolean[], paramarg3: (param0: Path[][]) => boolean[], paramarg4: (param0: Path[][]) => boolean[], paramarg5: (param0: Path[][]) => boolean[]): boolean;
    static loadAndParseFileSystemConfig(paramarg0: string): (param0: Path[][]) => boolean[];
    static matches(paramarg0: Path[][], paramarg1: (param0: Path[][]) => boolean[]): boolean;
    static parseFileSystemConfig(paramarg0: string): (param0: Path[][]) => boolean[];
    private constructor()
}