import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { PatternLayout$PatternSerializer } from '../../../../../../org/apache/logging/log4j/core/layout/PatternLayout$PatternSerializer.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class PatternLayout$NoFormatPatternSerializer extends Object implements PatternLayout$PatternSerializer {
    private constructor(formatters: PatternFormatter[])
    // private converters: LogEventPatternConverter[];
    requiresLocation(): boolean;
    toSerializable(event: LogEvent): string;
    toSerializable(event: LogEvent, buffer: StringBuilder): StringBuilder;
    toString(): string;
}