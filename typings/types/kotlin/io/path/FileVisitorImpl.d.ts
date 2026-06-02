import type { IOException } from '../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../java/nio/file/FileVisitResult.d.ts'
import type { SimpleFileVisitor } from '../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
export class FileVisitorImpl extends SimpleFileVisitor<Path[][]> {
    constructor(onPreVisitDirectory: Function2<Path[][], BasicFileAttributes, FileVisitResult> | null, onVisitFile: Function2<Path[][], BasicFileAttributes, FileVisitResult> | null, onVisitFileFailed: Function2<Path[][], IOException, FileVisitResult> | null, onPostVisitDirectory: Function2<Path[][], IOException, FileVisitResult> | null)
    // private onPostVisitDirectory: (param0: Path[][], param1: IOException | null) => FileVisitResult;
    // private onPreVisitDirectory: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    // private onVisitFile: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    // private onVisitFileFailed: (param0: Path[][], param1: IOException) => FileVisitResult;
    postVisitDirectory(dir: Path[][], exc: IOException | null): FileVisitResult;
    preVisitDirectory(dir: Path[][], attrs: BasicFileAttributes): FileVisitResult;
    visitFile(file: Path[][], attrs: BasicFileAttributes): FileVisitResult;
    visitFileFailed(file: Path[][], exc: IOException): FileVisitResult;
}