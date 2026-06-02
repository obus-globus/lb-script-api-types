import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../../java/nio/file/FileVisitResult.d.ts'
import type { FileVisitor } from '../../../../../../java/nio/file/FileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FileSystemPipesIterator$FSFileVisitor extends Object implements FileVisitor<Path[]> {
    private constructor(null_: FileSystemPipesIterator$FSFileVisitor, arg1: string, arg2: string)
    // private emitterName: string;
    // private fetcherName: string;
    postVisitDirectory(arg0: Path[], arg1: IOException): FileVisitResult;
    preVisitDirectory(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    visitFile(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    visitFileFailed(arg0: Path[], arg1: IOException): FileVisitResult;
}