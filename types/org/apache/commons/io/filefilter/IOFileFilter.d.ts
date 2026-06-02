import type { File } from '../../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../../java/io/FileFilter.d.ts'
import type { FilenameFilter } from '../../../../../java/io/FilenameFilter.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
export interface IOFileFilter extends FileFilter, FilenameFilter, PathMatcher, Object, PathFilter{
    accept(arg0: File): boolean;
    accept(arg0: File, arg1: string): boolean;
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    and(arg0: IOFileFilter): IOFileFilter;
    matches(arg0: Path[]): boolean;
    negate(): IOFileFilter;
    or(arg0: IOFileFilter): IOFileFilter;
}