import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Duration } from '../../../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Duration as Duration_2 } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Duration.d.ts'
import type { IfLastModified$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/IfLastModified$Builder.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class IfLastModified extends Object implements PathCondition {
    static EMPTY_ARRAY: PathCondition[];
    static copy(...paramsource: PathCondition[]): PathCondition[];
    static createAgeCondition(paramage: Duration_2, ...parampathConditions: PathCondition[]): IfLastModified;
    static newBuilder(): IfLastModified$Builder;
    constructor(arg0: Duration, arg1: PathCondition[], arg2: any)
    readonly age: Duration;
    readonly nestedConditions: PathCondition[];
    accept(basePath: Path, relativePath: Path, attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
    getAge(): Duration_2;
    getNestedConditions(): PathCondition[];
    toString(): string;
}