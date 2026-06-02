import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LevelPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LevelPatternConverter.d.ts'
export class LevelPatternConverter$LevelMapLevelPatternConverter extends LevelPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: (Object | null)[]): LevelPatternConverter;
    private constructor(levelMap: Map<Level, string>)
    // private levelMap: Map<Level, string>;
    format(event: LogEvent, output: StringBuilder): void;
}