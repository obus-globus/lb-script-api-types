import type { CopyOption } from '../../../../../java/nio/file/CopyOption.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
import type { CountingPathVisitor } from '../../../../../org/apache/commons/io/file/CountingPathVisitor.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
export class CopyDirectoryVisitor extends CountingPathVisitor {
    static withBigIntegerCounters(): CountingPathVisitor;
    static withLongCounters(): CountingPathVisitor;
    constructor(arg0: Counters$PathCounters, arg1: Path[], arg2: Path[], arg3: CopyOption[])
    constructor(arg0: Counters$PathCounters, arg1: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult, arg2: (param0: Path[][], param1: BasicFileAttributes) => FileVisitResult, arg3: Path[], arg4: Path[], arg5: CopyOption[])
    readonly copyOptions: CopyOption[];
    readonly sourceDirectory: Path[];
    readonly targetDirectory: Path[];
    copy(arg0: Path[], arg1: Path[]): void;
    equals(arg0: Object | null): boolean;
    getCopyOptions(): CopyOption[];
    getSourceDirectory(): Path[];
    getTargetDirectory(): Path[];
    hashCode(): number;
    preVisitDirectory(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
    // private resolveRelativeAsString(arg0: Path[]): Path[];
    visitFile(arg0: Path[], arg1: BasicFileAttributes): FileVisitResult;
}