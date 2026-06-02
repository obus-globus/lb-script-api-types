import type { File } from '../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../java/io/FileFilter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DirectoryWalker$CancelException } from '../../../../org/apache/commons/io/DirectoryWalker$CancelException.d.ts'
import type { IOFileFilter } from '../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
export abstract class DirectoryWalker<T extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(arg0: (param0: File) => kotlin.Boolean, arg1: number)
    constructor(arg0: IOFileFilter, arg1: IOFileFilter, arg2: number)
    // private depthLimit: number;
    // private filter: (param0: File) => kotlin.Boolean;
    checkIfCancelled(arg0: File, arg1: number, arg2: E[]): void;
    filterDirectoryContents(arg0: File, arg1: number, arg2: File[]): File[];
    handleCancelled(arg0: File, arg1: E[], arg2: DirectoryWalker$CancelException): void;
    handleDirectory(arg0: File, arg1: number, arg2: E[]): boolean;
    handleDirectoryEnd(arg0: File, arg1: number, arg2: E[]): void;
    handleDirectoryStart(arg0: File, arg1: number, arg2: E[]): void;
    handleEnd(arg0: E[]): void;
    handleFile(arg0: File, arg1: number, arg2: E[]): void;
    handleIsCancelled(arg0: File, arg1: number, arg2: E[]): boolean;
    handleRestricted(arg0: File, arg1: number, arg2: E[]): void;
    handleStart(arg0: File, arg1: E[]): void;
    // private walk(arg0: File, arg1: number, arg2: E[]): void;
    walk(arg0: File, arg1: E[]): void;
}