import type { File } from '../../../../../java/io/File.d.ts'
import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { PathVisitor } from '../../../../../org/apache/commons/io/file/PathVisitor.d.ts'
import type { IOFileFilter } from '../../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
export abstract class AbstractFileFilter extends Object implements PathVisitor, IOFileFilter {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    constructor()
    constructor(arg0: FileVisitResult, arg1: FileVisitResult)
    // private onAccept: FileVisitResult;
    // private onReject: FileVisitResult;
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
    and(arg0: IOFileFilter): IOFileFilter;
    append(arg0: Object[], arg1: StringBuilder): void;
    append(arg0: (Object | null)[], arg1: StringBuilder): void;
    get(arg0: () => FileVisitResult): FileVisitResult;
    handle(arg0: Throwable): FileVisitResult;
    isDirectory(arg0: File): boolean;
    isFile(arg0: File): boolean;
    matches(arg0: Path): boolean;
    negate(): IOFileFilter;
    or(arg0: IOFileFilter): IOFileFilter;
    postVisitDirectory(arg0: Path, arg1: IOException): FileVisitResult;
    preVisitDirectory(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
    toFileVisitResult(arg0: boolean): FileVisitResult;
    toString(): string;
    visitFile(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
    visitFileFailed(arg0: Path, arg1: IOException): FileVisitResult;
}