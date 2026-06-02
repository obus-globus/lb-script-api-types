import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
import type { VirtualFileSystem } from '../../../org/anarres/cpp/VirtualFileSystem.d.ts'
export class ResourceFileSystem extends Object implements VirtualFileSystem {
    constructor(arg0: ClassLoader, arg1: Charset)
    // private charset: Charset;
    // private loader: ClassLoader;
    getFile(arg0: string): VirtualFile;
    getFile(arg0: string, arg1: string): VirtualFile;
}