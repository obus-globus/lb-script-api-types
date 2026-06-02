import type { IOException } from '../../../../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../../../../java/nio/file/FileVisitResult.d.ts'
import type { SimpleFileVisitor } from '../../../../../../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { PathSorter } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathSorter.d.ts'
import type { PathWithAttributes } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathWithAttributes.d.ts'
export class SortingVisitor extends SimpleFileVisitor<Path[]> {
    constructor(sorter: PathSorter)
    // private collected: PathWithAttributes[];
    // private sorter: PathSorter;
    getSortedPaths(): PathWithAttributes[];
    visitFile(path: Path[], attrs: BasicFileAttributes): FileVisitResult;
    visitFileFailed(file: Path[], ioException: IOException): FileVisitResult;
}