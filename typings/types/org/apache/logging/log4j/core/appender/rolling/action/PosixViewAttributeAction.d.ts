import type { FileVisitor } from '../../../../../../../../java/nio/file/FileVisitor.d.ts'
import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { PosixFilePermission } from '../../../../../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { AbstractPathAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractPathAction.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
import type { PosixViewAttributeAction$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PosixViewAttributeAction$Builder.d.ts'
import type { StrSubstitutor } from '../../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export class PosixViewAttributeAction extends AbstractPathAction {
    static newBuilder(): PosixViewAttributeAction$Builder;
    private constructor(basePath: string, followSymbolicLinks: boolean, maxDepth: number, pathConditions: PathCondition[], subst: StrSubstitutor, filePermissions: PosixFilePermission[], fileOwner: string, fileGroup: string)
    readonly fileGroup: string;
    readonly fileOwner: string;
    readonly filePermissions: PosixFilePermission[];
    createFileVisitor(basePath: Path[], conditions: PathCondition[]): FileVisitor<Path[]>;
    getFileGroup(): string;
    getFileOwner(): string;
    getFilePermissions(): PosixFilePermission[];
    toString(): string;
}