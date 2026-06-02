import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { Configuration } from '../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class Logger$PrivateConfig extends Object {
    constructor(null_: Logger$PrivateConfig, pc: Logger$PrivateConfig, level: Level)
    constructor(null_: Logger$PrivateConfig, pc: Logger$PrivateConfig, lc: LoggerConfig)
    constructor(null_: Logger$PrivateConfig, config: Configuration, logger: Logger)
    config: Configuration;
    // private intLevel: number;
    // private logger: Logger;
    loggerConfig: LoggerConfig;
    // private loggerConfigLevel: Level;
    // private requiresLocation: boolean;
    filter(level: Level, marker: Marker, msg: Object, t: Throwable): boolean;
    filter(level: Level, marker: Marker, msg: CharSequence, t: Throwable): boolean;
    filter(level: Level, marker: Marker, msg: string): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): boolean;
    filter(level: Level, marker: Marker, msg: string, p1: Object[]): boolean;
    filter(level: Level, marker: Marker, msg: string, t: Throwable): boolean;
    filter(level: Level, marker: Marker, msg: Message, t: Throwable): boolean;
    hasFilter(): boolean;
    logEvent(event: LogEvent): void;
    toString(): string;
}