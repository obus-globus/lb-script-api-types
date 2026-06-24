import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { JavaFileSystem } from '../../../org/anarres/cpp/JavaFileSystem.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
export class JavaFileSystem$JavaFile extends File implements VirtualFile {
    static pathSeparator: string;
    static pathSeparatorChar: string;
    static separator: string;
    static separatorChar: string;
    static createTempFile(paramarg0: string, paramarg1: string): File;
    static createTempFile(paramarg0: string, paramarg1: string, paramarg2: File): File;
    static listRoots(): (Object | null)[];
    constructor(null_: JavaFileSystem, arg1: File, arg2: string)
    constructor(null_: JavaFileSystem, arg1: string)
    constructor(null_: JavaFileSystem, arg1: string, arg2: string)
    getChildFile(arg0: string): JavaFileSystem$JavaFile;
    getParentFile(): JavaFileSystem$JavaFile;
    getSource(): Token[];
}