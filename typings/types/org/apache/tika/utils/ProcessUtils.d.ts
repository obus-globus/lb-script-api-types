import type { ProcessBuilder } from '../../../../java/lang/ProcessBuilder.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileProcessResult } from '../../../../org/apache/tika/utils/FileProcessResult.d.ts'
export class ProcessUtils extends Object {
    static escapeCommandLine(paramarg0: string): string;
    static execute(paramarg0: ProcessBuilder, paramarg1: number, paramarg2: number, paramarg3: number): FileProcessResult;
    static execute(paramarg0: ProcessBuilder, paramarg1: number, paramarg2: Path[][], paramarg3: number): FileProcessResult;
    static unescapeCommandLine(paramarg0: string): string;
    constructor()
}