import type { Duration } from '../../../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Duration as Duration_2 } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Duration.d.ts'
import type { IfLastModified } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/IfLastModified.d.ts'
import type { PathCondition } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathCondition.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class IfLastModified$Builder extends Object implements Builder<IfLastModified> {
    constructor()
    // private age: Duration_2;
    // private nestedConditions: PathCondition[];
    build(): IfLastModified;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAge(age: Duration): IfLastModified$Builder;
    setNestedConditions(nestedConditions: PathCondition[]): IfLastModified$Builder;
}