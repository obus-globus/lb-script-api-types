import type { File } from '../../../java/io/File.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
import type { VirtualFileSystem } from '../../../org/anarres/cpp/VirtualFileSystem.d.ts'
export class ChrootFileSystem extends Object implements VirtualFileSystem {
    constructor(arg0: File)
    // private root: File;
    getFile(arg0: string): VirtualFile;
    getFile(arg0: string, arg1: string): VirtualFile;
}