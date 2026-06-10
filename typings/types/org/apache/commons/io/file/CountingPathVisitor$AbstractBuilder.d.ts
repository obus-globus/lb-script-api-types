import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
import type { SimplePathVisitor$AbstractBuilder } from '../../../../../org/apache/commons/io/file/SimplePathVisitor$AbstractBuilder.d.ts'
export abstract class CountingPathVisitor$AbstractBuilder<T extends Object | number | string | boolean, B extends CountingPathVisitor$AbstractBuilder<T, B>> extends SimplePathVisitor$AbstractBuilder<T, B> {
    constructor()
    // private directoryFilter: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    // private directoryPostTransformer: (param0: Path[]) => Object | null;
    // private fileFilter: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    // private pathCounters: Counters$PathCounters;
    getDirectoryFilter(): (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    getDirectoryPostTransformer(): (param0: Path[]) => Object | null;
    getFileFilter(): (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult;
    getPathCounters(): Counters$PathCounters;
    setDirectoryFilter(arg0: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult): B;
    setDirectoryPostTransformer(arg0: (param0: Path[]) => Object | null): B;
    setFileFilter(arg0: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult): B;
    setPathCounters(arg0: Counters$PathCounters): B;
}