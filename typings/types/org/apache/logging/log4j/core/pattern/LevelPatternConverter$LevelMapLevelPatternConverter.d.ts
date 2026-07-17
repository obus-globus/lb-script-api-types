import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LevelPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LevelPatternConverter.d.ts'
export class LevelPatternConverter$LevelMapLevelPatternConverter extends LevelPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: string[]): LevelPatternConverter;
    private constructor(levelMap: JavaMap<Level, string>)
    // private levelMap: JavaMap<Level, string>;
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, output: StringBuilder): void;
}