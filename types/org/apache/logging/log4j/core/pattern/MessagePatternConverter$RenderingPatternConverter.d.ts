import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { MessagePatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/MessagePatternConverter.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class MessagePatternConverter$RenderingPatternConverter extends MessagePatternConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: (Object | null)[]): MessagePatternConverter;
    constructor(delegate: MessagePatternConverter, textRenderer: TextRenderer)
    // private delegate: MessagePatternConverter;
    // private textRenderer: TextRenderer;
    format(event: LogEvent, toAppendTo: StringBuilder): void;
}