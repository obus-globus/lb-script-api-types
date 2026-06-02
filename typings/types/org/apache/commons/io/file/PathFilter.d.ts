import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PathFilter extends Object{
    accept(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
}