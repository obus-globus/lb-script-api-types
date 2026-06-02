import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { MessagePatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/MessagePatternConverter.d.ts'
export class MessagePatternConverter$SimpleMessagePatternConverter extends MessagePatternConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: (Object | null)[]): MessagePatternConverter;
    private constructor()
    format(event: LogEvent, toAppendTo: StringBuilder): void;
}