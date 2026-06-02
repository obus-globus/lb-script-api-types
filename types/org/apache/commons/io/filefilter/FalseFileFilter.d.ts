import type { File } from '../../../../../java/io/File.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFileFilter } from '../../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
export class FalseFileFilter extends Object implements Serializable, IOFileFilter {
    static EMPTY_STRING_ARRAY: (Object | null)[];
    static FALSE: IOFileFilter;
    static INSTANCE: IOFileFilter;
    constructor()
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    and(arg0: IOFileFilter): IOFileFilter;
    and(arg0: IOFileFilter): IOFileFilter;
    matches(arg0: Path[]): boolean;
    negate(): IOFileFilter;
    negate(): IOFileFilter;
    or(arg0: IOFileFilter): IOFileFilter;
    or(arg0: IOFileFilter): IOFileFilter;
    toString(): string;
}