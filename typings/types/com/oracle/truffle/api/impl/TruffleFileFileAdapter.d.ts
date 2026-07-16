import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
export class TruffleFileFileAdapter extends File {
    static pathSeparator: string;
    static pathSeparatorChar: string;
    static separator: string;
    static separatorChar: string;
    static createTempFile(paramarg0: string, paramarg1: string): File;
    static createTempFile(paramarg0: string, paramarg1: string, paramarg2: File): File;
    static listRoots(): File[];
    constructor(truffleFile: TruffleFile)
    // private truffleFile: TruffleFile;
    getAbsoluteFile(): File;
    getCanonicalFile(): File;
    getName(): string;
    getPath(): string;
    getTruffleFile(): TruffleFile;
    toURI(): URI;
}