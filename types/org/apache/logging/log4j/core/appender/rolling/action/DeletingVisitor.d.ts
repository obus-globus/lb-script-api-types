import type { IOException } from '../../../../../../../../java/io/IOException.d.ts'
import type { FileVisitResult } from '../../../../../../../../java/nio/file/FileVisitResult.d.ts'
import type { SimpleFileVisitor } from '../../../../../../../../java/nio/file/SimpleFileVisitor.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class DeletingVisitor extends SimpleFileVisitor<Path[]> {
    constructor(basePath: Path[], pathConditions: PathCondition[], testMode: boolean)
    // private basePath: Path[];
    // private pathConditions: PathCondition[];
    readonly testMode: boolean;
    delete(file: Path[]): void;
    isTestMode(): boolean;
    visitFile(file: Path[], attrs: BasicFileAttributes): FileVisitResult;
    visitFileFailed(file: Path[], ioException: IOException): FileVisitResult;
}