import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { PatternLayout$PatternSerializer } from '../../../../../../org/apache/logging/log4j/core/layout/PatternLayout$PatternSerializer.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class PatternLayout$PatternFormatterPatternSerializer extends Object implements PatternLayout$PatternSerializer {
    private constructor(formatters: PatternFormatter[])
    // private formatters: PatternFormatter[];
    requiresLocation(): boolean;
    toSerializable(event: LogEvent): string;
    toSerializable(event: LogEvent, buffer: StringBuilder): StringBuilder;
    toString(): string;
}