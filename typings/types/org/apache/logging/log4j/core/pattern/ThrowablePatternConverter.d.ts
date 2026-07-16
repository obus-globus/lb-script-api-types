import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ThrowableFormatOptions } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableFormatOptions.d.ts'
import type { LogEventPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/LogEventPatternConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
import type { ThrowablePropertyRendererFactory } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowablePropertyRendererFactory.d.ts'
import type { ThrowableRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableRenderer.d.ts'
import type { ThrowableStackTraceRendererFactory } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRendererFactory.d.ts'
export class ThrowablePatternConverter extends LogEventPatternConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: string[]): ThrowablePatternConverter;
    constructor(name: string, style: string, options: string[])
    constructor(name: string, style: string, options: string[], config: Configuration)
    constructor(name: string, style: string, options: string[], config: Configuration, propertyRendererFactory: ThrowablePropertyRendererFactory, stackTraceRendererFactory: ThrowableStackTraceRendererFactory)
    // private effectiveLineSeparatorProvider: (param0: LogEvent) => string;
    // private formatters: PatternFormatter[];
    readonly options: ThrowableFormatOptions;
    // private renderer: ThrowableRenderer;
    format(obj: Object, output: StringBuilder): void;
    format(event: LogEvent, buffer: StringBuilder): void;
    getOptions(): ThrowableFormatOptions;
    getSuffix(logEvent: LogEvent): string;
    handlesThrowable(): boolean;
}