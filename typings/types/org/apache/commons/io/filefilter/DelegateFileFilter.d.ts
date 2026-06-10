import type { File } from '../../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../../java/io/FileFilter.d.ts'
import type { FilenameFilter } from '../../../../../java/io/FilenameFilter.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFileFilter } from '../../../../../org/apache/commons/io/filefilter/AbstractFileFilter.d.ts'
export class DelegateFileFilter extends AbstractFileFilter implements Serializable {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    constructor(arg0: (param0: File) => boolean)
    constructor(arg0: (param0: File, param1: string) => boolean)
    // private fileFilter: (param0: File) => boolean;
    // private fileNameFilter: (param0: File, param1: string) => boolean;
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    toString(): string;
}