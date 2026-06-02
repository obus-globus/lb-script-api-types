import type { PathMatcher } from '../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FileSystemUtil extends Object {
    static isFileStoreExcluded(paramarg0: string, paramarg1: string, paramarg2: (param0: Path[][]) => kotlin.Boolean[], paramarg3: (param0: Path[][]) => kotlin.Boolean[], paramarg4: (param0: Path[][]) => kotlin.Boolean[], paramarg5: (param0: Path[][]) => kotlin.Boolean[]): boolean;
    static loadAndParseFileSystemConfig(paramarg0: string): (param0: Path[][]) => kotlin.Boolean[];
    static matches(paramarg0: Path[][], paramarg1: (param0: Path[][]) => kotlin.Boolean[]): boolean;
    static parseFileSystemConfig(paramarg0: string): (param0: Path[][]) => kotlin.Boolean[];
    private constructor()
}