import type { Object } from '../../../java/lang/Object.d.ts'
import type { LoggingEvent } from '../../../org/slf4j/event/LoggingEvent.d.ts'
export interface LoggingEventAware extends Object{
    log(arg0: LoggingEvent): void;
}