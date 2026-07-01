import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LevelPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LevelPatternConverter.d.ts'
export class LevelPatternConverter$SimpleLevelPatternConverter extends LevelPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: (Object | null)[]): LevelPatternConverter;
    constructor(arg0: any)
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, output: StringBuilder): void;
}