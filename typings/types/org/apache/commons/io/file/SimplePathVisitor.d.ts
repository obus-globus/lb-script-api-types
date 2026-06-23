import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { SimpleFileVisitor } from '../../../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathVisitor } from '../../../../../org/apache/commons/io/file/PathVisitor.d.ts'
import type { SimplePathVisitor$AbstractBuilder } from '../../../../../org/apache/commons/io/file/SimplePathVisitor$AbstractBuilder.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
export abstract class SimplePathVisitor extends SimpleFileVisitor<Path[]> implements PathVisitor {
    constructor()
    constructor(arg0: SimplePathVisitor$AbstractBuilder<Object, any>)
    constructor(arg0: (param0: Path[], param1: IOException) => FileVisitResult)
    // private visitFileFailedFunction: (param0: Path[], param1: IOException) => FileVisitResult;
    visitFileFailed(arg0: Path[], arg1: IOException): FileVisitResult;
}