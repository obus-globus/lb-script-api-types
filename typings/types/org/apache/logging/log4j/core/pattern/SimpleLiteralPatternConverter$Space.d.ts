import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { SimpleLiteralPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/SimpleLiteralPatternConverter.d.ts'
export class SimpleLiteralPatternConverter$Space extends SimpleLiteralPatternConverter {
    static CATEGORY: string;
    private constructor()
    format(output: StringBuilder): void;
    format(output: StringBuilder, args: Object[]): void;
    format(ignored: Object, output: StringBuilder): void;
    format(ignored: LogEvent, output: StringBuilder): void;
}