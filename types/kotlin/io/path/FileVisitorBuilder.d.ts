import type { IOException } from '../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../java/nio/file/FileVisitResult.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
export interface FileVisitorBuilder extends Object{
    onPostVisitDirectory(function_: Function2<Path[][], IOException, FileVisitResult>): void;
    onPreVisitDirectory(function_: Function2<Path[][], BasicFileAttributes, FileVisitResult>): void;
    onVisitFile(function_: Function2<Path[][], BasicFileAttributes, FileVisitResult>): void;
    onVisitFileFailed(function_: Function2<Path[][], IOException, FileVisitResult>): void;
}