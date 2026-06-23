import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { SimplePathVisitor } from '../../../../../org/apache/commons/io/file/SimplePathVisitor.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
export class NoopPathVisitor extends SimplePathVisitor {
    static INSTANCE: NoopPathVisitor;
    constructor()
    constructor(arg0: (param0: Path[], param1: IOException) => FileVisitResult)
}