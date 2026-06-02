import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FileSystemUtil$FileSystemDelegate extends Object implements AutoCloseable {
    constructor(arg0: FileSystem, arg1: boolean)
    // private fileSystem: FileSystem;
    // private owner: boolean;
    close(): void;
    get(): FileSystem;
}