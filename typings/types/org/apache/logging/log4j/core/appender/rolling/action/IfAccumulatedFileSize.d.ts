import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class IfAccumulatedFileSize extends Object implements PathCondition {
    static EMPTY_ARRAY: (Object | null)[];
    static copy(...paramsource: (Object | null)[]): (Object | null)[];
    static createFileSizeCondition(paramsize: string, ...paramnestedConditions: (Object | null)[]): IfAccumulatedFileSize;
    private constructor(thresholdSize: number, ...nestedConditions: PathCondition[])
    // private accumulatedSize: number;
    readonly nestedConditions: PathCondition[];
    readonly thresholdBytes: number;
    accept(basePath: Path, relativePath: Path, attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
    getNestedConditions(): PathCondition[];
    getThresholdBytes(): number;
    toString(): string;
}