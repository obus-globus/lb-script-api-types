import type { FileVisitor } from '../../../../../java/nio/file/FileVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PathVisitor extends FileVisitor<Path[]>, Object{
}