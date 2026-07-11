import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ArrayPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/ArrayPatternConverter.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
export class LiteralPatternConverter extends LogEventPatternConverter implements ArrayPatternConverter {
    static CATEGORY: string;
    constructor(config: Configuration, literal: string, convertBackslashes: boolean)
    // private config: Configuration;
    readonly literal: string;
    // private substitute: boolean;
    format(output: StringBuilder, ...objects: Object[]): void;
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
    getLiteral(): string;
    isVariable(): boolean;
    toString(): string;
}