import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { MapMessage$MapFormat } from '../../../../../../org/apache/logging/log4j/message/MapMessage$MapFormat.d.ts'
export class MapPatternConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: (Object | null)[]): MapPatternConverter;
    static newInstance(paramoptions: (Object | null)[], paramformat: MapMessage$MapFormat): MapPatternConverter;
    private constructor(options: string[], format: string[])
    // private format: string[];
    // private key: string;
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
}