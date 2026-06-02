import type { Object } from '../../../java/lang/Object.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
export interface VirtualFileSystem extends Object{
    getFile(arg0: string): VirtualFile;
    getFile(arg0: string, arg1: string): VirtualFile;
}