import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceFileSystem } from '../../../org/anarres/cpp/ResourceFileSystem.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
import type { VirtualFile } from '../../../org/anarres/cpp/VirtualFile.d.ts'
export class ResourceFileSystem$ResourceFile extends Object implements VirtualFile {
    constructor(null_: ResourceFileSystem, arg1: ClassLoader, arg2: string)
    // private loader: ClassLoader;
    readonly path: string;
    getChildFile(arg0: string): ResourceFileSystem$ResourceFile;
    getName(): string;
    getParentFile(): ResourceFileSystem$ResourceFile;
    getPath(): string;
    getSource(): Token[];
    isFile(): boolean;
}