import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AccumulatorPathVisitor$Builder } from '../../../../../org/apache/commons/io/file/AccumulatorPathVisitor$Builder.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
import type { CountingPathVisitor } from '../../../../../org/apache/commons/io/file/CountingPathVisitor.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
export class AccumulatorPathVisitor extends CountingPathVisitor {
    static builder(): AccumulatorPathVisitor$Builder;
    static withBigIntegerCounters(): AccumulatorPathVisitor;
    static withBigIntegerCounters(paramarg0: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult, paramarg1: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult): AccumulatorPathVisitor;
    static withBigIntegerCounters(): CountingPathVisitor;
    static withLongCounters(): AccumulatorPathVisitor;
    static withLongCounters(paramarg0: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult, paramarg1: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult): AccumulatorPathVisitor;
    static withLongCounters(): CountingPathVisitor;
    constructor()
    private constructor(arg0: AccumulatorPathVisitor$Builder)
    constructor(arg0: Counters$PathCounters)
    constructor(arg0: Counters$PathCounters, arg1: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult, arg2: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult)
    constructor(arg0: Counters$PathCounters, arg1: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult, arg2: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult, arg3: (param0: Path[], param1: IOException) => FileVisitResult)
    readonly dirList: Path[][];
    readonly fileList: Path[][];
    // private add(arg0: Path[][], arg1: Path[]): void;
    equals(arg0: Object | null): boolean;
    getDirList(): Path[][];
    getFileList(): Path[][];
    hashCode(): number;
    relativizeDirectories(arg0: Path[], arg1: boolean, arg2: (param0: Object) => boolean): Path[][];
    relativizeFiles(arg0: Path[], arg1: boolean, arg2: (param0: Object) => boolean): Path[][];
    updateDirCounter(arg0: Path[], arg1: IOException): void;
    updateFileCounters(arg0: Path[], arg1: BasicFileAttributes): void;
}