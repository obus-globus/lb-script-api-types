import type { IOException } from '../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../java/nio/file/FileVisitResult.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FileVisitor<T extends Object | number | string | boolean> extends Object{
    postVisitDirectory(arg0: T, arg1: IOException): FileVisitResult;
    preVisitDirectory(arg0: T, arg1: BasicFileAttributes): FileVisitResult;
    visitFile(arg0: T, arg1: BasicFileAttributes): FileVisitResult;
    visitFileFailed(arg0: T, arg1: IOException): FileVisitResult;
}