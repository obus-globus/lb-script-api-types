import type { EventListener } from '../../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LoggerContext } from '../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
export class LogEventListener extends Object implements EventListener {
    constructor()
    // private context: LoggerContext;
    log(event: LogEvent): void;
}