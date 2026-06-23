import type { File } from '../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../java/io/FileFilter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DirectoryWalker$CancelException } from '../../../../org/apache/commons/io/DirectoryWalker$CancelException.d.ts'
import type { IOFileFilter } from '../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
export abstract class DirectoryWalker<T extends unknown> extends Object {
    constructor()
    constructor(arg0: (param0: File) => boolean, arg1: number)
    constructor(arg0: IOFileFilter, arg1: IOFileFilter, arg2: number)
    // private depthLimit: number;
    // private filter: (param0: File) => boolean;
    checkIfCancelled(arg0: File, arg1: number, arg2: T[]): void;
    filterDirectoryContents(arg0: File, arg1: number, arg2: File[]): File[];
    handleCancelled(arg0: File, arg1: T[], arg2: DirectoryWalker$CancelException): void;
    handleDirectory(arg0: File, arg1: number, arg2: T[]): boolean;
    handleDirectoryEnd(arg0: File, arg1: number, arg2: T[]): void;
    handleDirectoryStart(arg0: File, arg1: number, arg2: T[]): void;
    handleEnd(arg0: T[]): void;
    handleFile(arg0: File, arg1: number, arg2: T[]): void;
    handleIsCancelled(arg0: File, arg1: number, arg2: T[]): boolean;
    handleRestricted(arg0: File, arg1: number, arg2: T[]): void;
    handleStart(arg0: File, arg1: T[]): void;
    // private walk(arg0: File, arg1: number, arg2: T[]): void;
    walk(arg0: File, arg1: T[]): void;
}