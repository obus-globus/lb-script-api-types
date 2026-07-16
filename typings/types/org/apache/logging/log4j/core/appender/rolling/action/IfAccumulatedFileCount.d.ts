import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class IfAccumulatedFileCount extends Object implements PathCondition {
    static EMPTY_ARRAY: PathCondition[];
    static copy(...paramsource: PathCondition[]): PathCondition[];
    static createFileCountCondition(paramthreshold: number, ...paramnestedConditions: PathCondition[]): IfAccumulatedFileCount;
    private constructor(thresholdParam: number, ...nestedConditions: PathCondition[])
    // private count: number;
    readonly nestedConditions: PathCondition[];
    // private threshold: number;
    accept(basePath: Path, relativePath: Path, attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
    getNestedConditions(): PathCondition[];
    getThresholdCount(): number;
    toString(): string;
}