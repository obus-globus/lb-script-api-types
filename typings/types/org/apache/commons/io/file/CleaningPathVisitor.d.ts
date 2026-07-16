import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
import type { CountingPathVisitor } from '../../../../../org/apache/commons/io/file/CountingPathVisitor.d.ts'
import type { DeleteOption } from '../../../../../org/apache/commons/io/file/DeleteOption.d.ts'
export class CleaningPathVisitor extends CountingPathVisitor {
    static withBigIntegerCounters(): CountingPathVisitor;
    static withLongCounters(): CountingPathVisitor;
    constructor(arg0: Counters$PathCounters, ...arg1: string[])
    constructor(arg0: Counters$PathCounters, arg1: DeleteOption[], ...arg2: string[])
    // private overrideReadOnly: boolean;
    // private skip: string[];
    // private accept(arg0: Path): boolean;
    accept(arg0: Path, arg1: BasicFileAttributes): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    preVisitDirectory(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
    visitFile(arg0: Path, arg1: BasicFileAttributes): FileVisitResult;
}