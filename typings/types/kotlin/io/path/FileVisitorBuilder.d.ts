import type { IOException } from '../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FileVisitorBuilder extends Object {
    onPostVisitDirectory(function_: (param0: Path[][], param1: IOException | null) => FileVisitResult): void;
    onPreVisitDirectory(function_: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult): void;
    onVisitFile(function_: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult): void;
    onVisitFileFailed(function_: (param0: Path[][], param1: IOException) => FileVisitResult): void;
}