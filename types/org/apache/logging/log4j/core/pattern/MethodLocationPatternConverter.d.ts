import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
export class MethodLocationPatternConverter extends LogEventPatternConverter implements LocationAware {
    static CATEGORY: string;
    static newInstance(paramoptions: (Object | null)[]): MethodLocationPatternConverter;
    private constructor()
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    requiresLocation(): boolean;
}