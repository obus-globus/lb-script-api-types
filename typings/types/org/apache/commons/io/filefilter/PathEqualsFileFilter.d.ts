import type { File } from '../../../../../java/io/File.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractFileFilter } from '../../../../../org/apache/commons/io/filefilter/AbstractFileFilter.d.ts'
export class PathEqualsFileFilter extends AbstractFileFilter {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    constructor(arg0: Path)
    // private path: Path;
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
}