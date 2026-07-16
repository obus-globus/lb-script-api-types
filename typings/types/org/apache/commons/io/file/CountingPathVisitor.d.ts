import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
import type { CountingPathVisitor$AbstractBuilder } from '../../../../../org/apache/commons/io/file/CountingPathVisitor$AbstractBuilder.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
import type { SimplePathVisitor } from '../../../../../org/apache/commons/io/file/SimplePathVisitor.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
export class CountingPathVisitor extends SimplePathVisitor {
    static withBigIntegerCounters(): CountingPathVisitor;
    static withLongCounters(): CountingPathVisitor;
    constructor(arg0: Counters$PathCounters)
    constructor(arg0: Counters$PathCounters, arg1: (param0: Path, param1: BasicFileAttributes) => FileVisitResult, arg2: (param0: Path, param1: BasicFileAttributes) => FileVisitResult)
    constructor(arg0: Counters$PathCounters, arg1: (param0: Path, param1: BasicFileAttributes) => FileVisitResult, arg2: (param0: Path, param1: BasicFileAttributes) => FileVisitResult, arg3: (param0: Path, param1: IOException) => FileVisitResult)
    constructor(arg0: CountingPathVisitor$AbstractBuilder<Object, any>)
    // private directoryFilter: (param0: Path, param1: BasicFileAttributes) => FileVisitResult;
    // private directoryPostTransformer: (param0: Path) => Path;
    // private fileFilter: (param0: Path, param1: BasicFileAttributes) => FileVisitResult;
    readonly pathCounters: Counters$PathCounters;
    accept(arg0: Path, arg1: BasicFileAttributes): boolean;
    equals(arg0: Object | null): boolean;
    getPathCounters(): Counters$PathCounters;
    hashCode(): number;
    postVisitDirectory(arg0: Path, arg1: IOException): FileVisitResult;
    preVisitDirectory(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
    toString(): string;
    updateDirCounter(arg0: Path, arg1: IOException): void;
    updateFileCounters(arg0: Path, arg1: BasicFileAttributes): void;
    visitFile(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
}