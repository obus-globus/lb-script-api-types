import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { NameAbbreviator } from '../../../../../../org/apache/logging/log4j/core/pattern/NameAbbreviator.d.ts'
export abstract class NamePatternConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    constructor(name: string, style: string, options: string[])
    // private abbreviator: NameAbbreviator;
    abbreviate(original: string, destination: StringBuilder): void;
}