import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ChrootFileSystem } from '../../../org/anarres/cpp/ChrootFileSystem.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
export class ChrootFileSystem$ChrootFile extends File implements VirtualFile {
    static pathSeparator: string;
    static pathSeparatorChar: string;
    static separator: string;
    static separatorChar: string;
    static createTempFile(paramarg0: string, paramarg1: string): File;
    static createTempFile(paramarg0: string, paramarg1: string, paramarg2: File): File;
    static listRoots(): (Object | null)[];
    constructor(null_: ChrootFileSystem, arg1: File, arg2: string)
    constructor(null_: ChrootFileSystem, arg1: string)
    constructor(null_: ChrootFileSystem, arg1: string, arg2: string)
    // private rfile: File;
    getChildFile(arg0: string): ChrootFileSystem$ChrootFile;
    getParentFile(): ChrootFileSystem$ChrootFile;
    getSource(): Token[];
    isFile(): boolean;
}