import type { IOException } from '../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { SimpleFileVisitor } from '../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
export class FileVisitorImpl extends SimpleFileVisitor<Path[][]> {
    constructor(onPreVisitDirectory: ((param0: Path[][], param1: BasicFileAttributes) => FileVisitResult) | null, onVisitFile: ((param0: Path[][], param1: BasicFileAttributes) => FileVisitResult) | null, onVisitFileFailed: ((param0: Path[][], param1: IOException) => FileVisitResult) | null, onPostVisitDirectory: ((param0: Path[][], param1: IOException | null) => FileVisitResult) | null)
    // private onPostVisitDirectory: ((param0: Path[][], param1: IOException | null) => FileVisitResult) | null;
    // private onPreVisitDirectory: ((param0: Path[][], param1: BasicFileAttributes) => FileVisitResult) | null;
    // private onVisitFile: ((param0: Path[][], param1: BasicFileAttributes) => FileVisitResult) | null;
    // private onVisitFileFailed: ((param0: Path[][], param1: IOException) => FileVisitResult) | null;
    postVisitDirectory(dir: Path[][], exc: IOException | null): FileVisitResult;
    preVisitDirectory(dir: Path[][], attrs: BasicFileAttributes): FileVisitResult;
    visitFile(file: Path[][], attrs: BasicFileAttributes): FileVisitResult;
    visitFileFailed(file: Path[][], exc: IOException): FileVisitResult;
}