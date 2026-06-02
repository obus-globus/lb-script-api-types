import type { FileVisitOption } from '../../../../../../../../java/nio/file/FileVisitOption.d.ts'
import type { FileVisitor } from '../../../../../../../../java/nio/file/FileVisitor.d.ts'
import type { AbstractAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractAction.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
import type { StrSubstitutor } from '../../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export abstract class AbstractPathAction extends AbstractAction {
    constructor(basePath: string, followSymbolicLinks: boolean, maxDepth: number, pathFilters: PathCondition[], subst: StrSubstitutor)
    readonly basePathString: string;
    readonly maxDepth: number;
    readonly options: FileVisitOption[];
    readonly pathConditions: PathCondition[];
    // private subst: StrSubstitutor;
    createFileVisitor(visitorBaseDir: Path[], conditions: PathCondition[]): FileVisitor<Path[]>;
    execute(): boolean;
    execute(visitor: FileVisitor<Path[]>): boolean;
    getBasePath(): Path[];
    getBasePathString(): string;
    getMaxDepth(): number;
    getOptions(): FileVisitOption[];
    getPathConditions(): PathCondition[];
    getStrSubstitutor(): StrSubstitutor;
    isFollowSymbolicLinks(): boolean;
    toString(): string;
}