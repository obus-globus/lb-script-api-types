import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
export class Loggers extends Object {
    constructor(map: JavaMap<string, LoggerConfig>, root: LoggerConfig)
    readonly map: JavaMap<string, LoggerConfig>;
    readonly root: LoggerConfig;
    getMap(): JavaMap<string, LoggerConfig>;
    getRoot(): LoggerConfig;
}