import type { IfLastModified$1 } from '../../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Duration } from '../../../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Duration as Duration_2 } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Duration.d.ts'
import type { IfLastModified$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/IfLastModified$Builder.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
export class IfLastModified extends Object implements PathCondition {
    static EMPTY_ARRAY: (Object | null)[];
    static copy(paramsource: (Object | null)[]): (Object | null)[];
    static createAgeCondition(paramage: Duration_2, parampathConditions: (Object | null)[]): IfLastModified;
    static newBuilder(): IfLastModified$Builder;
    private constructor(age: Duration, nestedConditions: PathCondition[])
    constructor(arg0: Duration, arg1: PathCondition[], arg2: IfLastModified$1)
    readonly age: Duration;
    readonly nestedConditions: PathCondition[];
    accept(basePath: Path[], relativePath: Path[], attrs: BasicFileAttributes): boolean;
    beforeFileTreeWalk(): void;
    getAge(): Duration_2;
    getNestedConditions(): PathCondition[];
    toString(): string;
}