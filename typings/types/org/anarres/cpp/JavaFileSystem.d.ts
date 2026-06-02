import type { Object } from '../../../java/lang/Object.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
import type { VirtualFileSystem } from '../../../org/anarres/cpp/VirtualFileSystem.d.ts'
export class JavaFileSystem extends Object implements VirtualFileSystem {
    constructor()
    getFile(arg0: string): VirtualFile;
    getFile(arg0: string, arg1: string): VirtualFile;
}