import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
import type { SimplePathVisitor$AbstractBuilder } from '../../../../../org/apache/commons/io/file/SimplePathVisitor$AbstractBuilder.d.ts'
export abstract class CountingPathVisitor$AbstractBuilder<T extends Object | number | string | boolean, B extends CountingPathVisitor$AbstractBuilder<T, B>> extends SimplePathVisitor$AbstractBuilder<T, B> {
    constructor()
    // private directoryFilter: (param0: Path[][], param1: BasicFileAttributes) => java.nio.file.FileVisitResult;
    // private directoryPostTransformer: (param0: Path[]) => unknown;
    // private fileFilter: (param0: Path[][], param1: BasicFileAttributes) => java.nio.file.FileVisitResult;
    // private pathCounters: Counters$PathCounters;
    getDirectoryFilter(): (param0: Path[][], param1: BasicFileAttributes) => java.nio.file.FileVisitResult;
    getDirectoryPostTransformer(): (param0: Path[]) => unknown;
    getFileFilter(): (param0: Path[][], param1: BasicFileAttributes) => java.nio.file.FileVisitResult;
    getPathCounters(): Counters$PathCounters;
    setDirectoryFilter(arg0: (param0: Path[][], param1: BasicFileAttributes) => java.nio.file.FileVisitResult): B;
    setDirectoryPostTransformer(arg0: (param0: Path[]) => unknown): B;
    setFileFilter(arg0: (param0: Path[][], param1: BasicFileAttributes) => java.nio.file.FileVisitResult): B;
    setPathCounters(arg0: Counters$PathCounters): B;
}