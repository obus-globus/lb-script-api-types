import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractSupplier } from '../../../../../org/apache/commons/io/build/AbstractSupplier.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
export abstract class SimplePathVisitor$AbstractBuilder<T extends unknown, B extends AbstractSupplier<T, B>> extends AbstractSupplier<T, B> {
    constructor()
    // private visitFileFailedFunction: (param0: Path[], param1: IOException) => FileVisitResult;
    getVisitFileFailedFunction(): (param0: Path[], param1: IOException) => FileVisitResult;
    setVisitFileFailedFunction(arg0: (param0: Path[], param1: IOException) => FileVisitResult): B;
}