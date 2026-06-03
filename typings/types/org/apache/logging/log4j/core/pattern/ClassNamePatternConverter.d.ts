import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { NamePatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/NamePatternConverter.d.ts'
export class ClassNamePatternConverter extends NamePatternConverter implements LocationAware {
    static CATEGORY: string;
    static newInstance(paramoptions: (Object | null)[]): ClassNamePatternConverter;
    private constructor(options: string[])
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    requiresLocation(): boolean;
}