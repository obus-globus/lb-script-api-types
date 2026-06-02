import type { Object } from '../../../java/lang/Object.d.ts'
import type { ILoggerFactory } from '../../../org/slf4j/ILoggerFactory.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { SubstituteLoggingEvent } from '../../../org/slf4j/event/SubstituteLoggingEvent.d.ts'
import type { SubstituteLogger } from '../../../org/slf4j/helpers/SubstituteLogger.d.ts'
export class SubstituteLoggerFactory extends Object implements ILoggerFactory {
    constructor()
    readonly eventQueue: SubstituteLoggingEvent[];
    readonly loggers: { [key: string]: SubstituteLogger };
    // private postInitialization: boolean;
    clear(): void;
    getEventQueue(): SubstituteLoggingEvent[];
    getLogger(arg0: string): Logger;
    getLoggerNames(): string[];
    getLoggers(): SubstituteLogger[];
    postInitialization(): void;
}