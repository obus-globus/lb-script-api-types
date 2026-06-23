import type { FileVisitor } from '../../../../../../../../java/nio/file/FileVisitor.d.ts'
import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AbstractPathAction } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/AbstractPathAction.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
import type { PathSorter } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathSorter.d.ts'
import type { PathWithAttributes } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathWithAttributes.d.ts'
import type { ScriptCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/ScriptCondition.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { StrSubstitutor } from '../../../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export class DeleteAction extends AbstractPathAction {
    static createDeleteAction(parambasePath: string, paramfollowLinks: boolean, parammaxDepth: number, paramtestMode: boolean, paramsorterParameter: PathSorter, parampathConditions: (Object | null)[], paramscriptCondition: ScriptCondition, paramconfig: Configuration): DeleteAction;
    constructor(basePath: string, followSymbolicLinks: boolean, maxDepth: number, testMode: boolean, sorter: PathSorter, pathConditions: PathCondition[], scriptCondition: ScriptCondition, subst: StrSubstitutor)
    // private pathSorter: PathSorter;
    // private scriptCondition: ScriptCondition;
    readonly testMode: boolean;
    // private callScript(): PathWithAttributes[];
    createFileVisitor(visitorBaseDir: Path[], conditions: PathCondition[]): FileVisitor<Path[]>;
    delete(path: Path[]): void;
    // private deleteSelectedFiles(selectedForDeletion: PathWithAttributes[]): void;
    execute(): boolean;
    execute(visitor: FileVisitor<Path[]>): boolean;
    // private executeScript(): boolean;
    getSortedPaths(): PathWithAttributes[];
    isTestMode(): boolean;
    // private trace(label: string, sortedPaths: PathWithAttributes[]): void;
}